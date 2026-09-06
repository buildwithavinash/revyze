import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { syncAll } from "../services/syncService";

const AuthContext = createContext(null);

// Auth events that should trigger a full cloud sync. Supabase also fires
// onAuthStateChange for things like TOKEN_REFRESHED (roughly hourly) where
// nothing about the user's data actually changed — syncing on those wastes
// a handful of network round-trips for no reason.
const SYNC_ON_EVENTS = new Set(["SIGNED_IN", "INITIAL_SESSION"]);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    let mounted = true;

    const runSync = async () => {
      try {
        setIsSyncing(true);

        await syncAll();

        console.log("Cloud sync completed.");
      } catch (error) {
        console.error("Cloud sync failed:", error);
      } finally {
        if (mounted) {
          setIsSyncing(false);
        }
      }
    };

    const loadSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!mounted) return;

        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          await runSync();
        }
      } catch (error) {
        console.error("Failed to load auth session:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;

      const currentUser = session?.user ?? null;
      setUser(currentUser);

      // Only resync on events that actually represent a fresh login —
      // skip TOKEN_REFRESHED, SIGNED_OUT, etc.
      if (currentUser && SYNC_ON_EVENTS.has(event)) {
        await runSync();
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isSyncing,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
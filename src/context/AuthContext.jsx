import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { syncAll } from "../services/syncService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    let mounted = true;

    const handleSession = async (session) => {
      if (!mounted) return;

      const currentUser = session?.user ?? null;

      setUser(currentUser);

      // Sync local attempts with Supabase
      // only when a user is authenticated.
      if (currentUser) {
        try {
          setIsSyncing(true);

          await syncAll();

          console.log("Cloud sync completed.");
        } catch (error) {
          console.error("Initial cloud sync failed:", error);
        } finally {
          if (mounted) {
            setIsSyncing(false);
          }
        }
      }
    };

    const loadSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        await handleSession(session);
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
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        await handleSession(session);
      }
    );

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
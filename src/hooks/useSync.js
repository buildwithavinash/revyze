import { useEffect } from "react";
import { useAuth } from "../context/AuthContext"
import { trySyncQuizAttempts } from "../services/syncService";

const useSync = () => {
    const {isAuthenticated} = useAuth();

    useEffect(()=> {
        if(!isAuthenticated){
            return;
        }

        const handleOnline = async () => {
            console.log("Internet connection restrored. Trying cloud sync...");
            await trySyncQuizAttempts();
        };

        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('online', handleOnline);
        }
    }, [isAuthenticated])
}

export default useSync;
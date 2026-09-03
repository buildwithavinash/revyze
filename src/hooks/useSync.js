import { useEffect } from "react";
import { useAuth } from "../context/AuthContext"
import { syncAll } from "../services/syncService";

const useSync = () => {
    const {isAuthenticated} = useAuth();

    useEffect(()=> {
        if(!isAuthenticated){
            return;
        }

        const handleOnline = async () => {
            console.log("Internet connection restrored. Trying cloud sync...");

            try {
                const result = await syncAll();
                console.log("Cloud Sync completed: ", result);
            }catch(error){
                console.error("Cloud sync failed: ", error)
            }
           
        };

        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('online', handleOnline);
        }
    }, [isAuthenticated])
}

export default useSync;
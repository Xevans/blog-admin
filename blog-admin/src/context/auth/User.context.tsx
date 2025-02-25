/*import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../../utils/firebase/firebase-conn.util"; 


// actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // Recall we implement useEffect when there is code we only want to run when this component is mounted for the first time.
    // If we implement the listener without this, it will always be listening
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {

            // we know that user will be returned updated with either an authenticated user or null
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}*/
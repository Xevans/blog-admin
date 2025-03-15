import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { auth } from "../../utils/firebase/firebase-conn.util"; 
import { User } from "firebase/auth";
import { UserContextType } from "../../types/UserContextType";


// actual value you want to access
export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            //console.log("user is signed in: ", user)
        });
        return unsubscribe;
    }, []);

    const value = {
        user
    }

    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    );
}
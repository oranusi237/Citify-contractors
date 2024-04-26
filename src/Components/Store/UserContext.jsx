import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";


const userValue = {
    isAuthenticated: false,
}

export const userAuthContext = createContext(userValue);

export function useUserAuth() {
    return useContext(userAuthContext);
}

export default function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const auth = getAuth();
   
  // Empty dependency array to run this effect only once on component mount

    // Function to handle user authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        });

        // Unsubscribe from the auth state listener when component unmounts
        return () => unsubscribe();
    }, );

    const loginUser = (userData) => {
        setUser(userData); // Set the user data upon successful login
        setIsAuthenticated(true); // Set isAuthenticated to true
    };

    return (
        <userAuthContext.Provider
            value={{ user, setUser, isAuthenticated, setIsAuthenticated, loginUser }}
        >
            {children}
        </userAuthContext.Provider>
    );
}
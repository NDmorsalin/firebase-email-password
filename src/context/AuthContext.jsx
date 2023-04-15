import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()


export const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return auth;
};



export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
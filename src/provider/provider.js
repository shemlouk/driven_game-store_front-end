import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [value, setValue] = useState(false)
    const [value2, setValue2] = useState(false)
    
    return (
        <AuthContext.Provider value={{ value, setValue, value2, setValue2 }}>
        {props.children}
        </AuthContext.Provider>
    );
}
import React, { useState, useContext, createContext } from 'react'
import { useHistory } from 'react-router-dom'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const history = useHistory();
    const [ user, setUser ] = useState(null);
    const [ usuarios, setUsuarios ] = useState([]);

    const setAuthUser = (uid) => {
        setUser(uid);
        return history.push('/')
    }

    const setUserX = (data) => {
        setUsuarios(data)
    }

    return(
        <AuthContext.Provider value={{ user, setAuthUser, usuarios, setUserX}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
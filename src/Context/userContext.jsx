import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUser } from "../Components/apis/useGetUser";
import axios from "axios";
import { useLogin } from "../Components/apis/useLogin";

export const UserContext = createContext("")

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user,setUser]= useGetUser()
    const [res,submit]=useLogin()
    
    return (
        <UserContext.Provider value={{ submit,user }}>
            {props.children}
        </UserContext.Provider>
    )
}
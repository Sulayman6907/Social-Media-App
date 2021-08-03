import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUser } from "../Components/apis/useGetUser";
import axios from "axios";
import { useLogin } from "../Components/apis/useLogin";
import { useSignUp } from "../Components/apis/useSignUp";

export const UserContext = createContext("")

export const UserProvider = (props) => {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
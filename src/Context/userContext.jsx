import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export const UserContext = createContext("")

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user,setUser]= useState()
    let history = useHistory();
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    useEffect(()=>{
        getUser()
    },[])

    const submit = async ({ email, password }) => {
        try {
            console.log("here are the values : ", email, password)
            //Login a user
            const user = JSON.stringify({ email, password });
            const url = "/api/auth";
            // console.log(user)
            const res = await axios.post(url, user, config)
            setToken(res.data.token)
            localStorage.setItem("token", res.data.token)
            if (res.status === 201) {
                history.push("/feed")
            }
        } catch (err) {
            console.log(err)
        }
    };

    const getUser = async () => {
        let token = localStorage.getItem("token")
        console.log(token)
        try {
            const res = await axios.get("/api/profile/me", {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });
            console.log(res.data.user)
            setUser(res.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{ submit,user }}>
            {props.children}
        </UserContext.Provider>
    )
}
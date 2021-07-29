import { useState,useEffect } from 'react';
import axios from "axios";

export const useLogin=()=>{
    const [res,setRes]=useState()
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const login = async ({ email, password }) => {
        try {
            console.log("here are the values : ", email, password)
            //Login a user
            const user = JSON.stringify({ email, password });
            const url = "/api/auth";
            // console.log(user)
            const res = await axios.post(url, user, config)
            setRes(res)
            localStorage.setItem("token", res.data.token)
            return res
        } catch (err) {
            console.log(err)
        }
    };
    return [res,login]
}
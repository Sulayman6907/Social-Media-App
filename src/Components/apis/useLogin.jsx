import React from 'react';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export const useLogin=()=>{
    const [res,setRes]=useState()
    const history = useHistory();
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const submit = async ({ email, password }) => {
        try {
            console.log("here are the values : ", email, password)
            //Login a user
            const user = JSON.stringify({ email, password });
            const url = "/api/auth";
            // console.log(user)
            const res = await axios.post(url, user, config)
            setRes(res.data.token)
            localStorage.setItem("token", res.data.token)
            if (res.status === 201) {
                history.push("/feed")
            }
        } catch (err) {
            console.log(err)
        }
    };
    return [res,submit]
}
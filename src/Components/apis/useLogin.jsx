import { useState, useEffect } from 'react';
import axios from "axios";

export const useLogin = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const login = async ({ email, password }) => {
        try {
            //Login a user
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const user = JSON.stringify({ email, password });
            const url = "/api/auth";
            const res = await axios.post(url, user, config)
            localStorage.setItem("token", res.data.token)
            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data.token,
                error: null
            })
        } catch (err) {
            setRes({
                success: false,
                loading: false,
                status: null,
                data: null,
                error: err.response.status
            })
            console.log(err)
        }
    };
    return [res, login]
}
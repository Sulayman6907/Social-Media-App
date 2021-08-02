import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export const useGetUser = () => {
    const [res, setRes] = useState({
        success: false,
        loading: true,
        status: null,
        data: null,
        error: null
    })

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
            console.log(res)
            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data.user,
                error: null
            })

        } catch (error) {
            setRes({
                success: false,
                loading: false,
                status: null,
                data: null,
                error: error.response.status
            })
            console.log(error)
        }
    }
    return [res, getUser]
}
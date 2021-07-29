import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

export const useGetUser=()=>{
    const [user,setUser]=useState()
    
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
            setUser(res.data.user)
            return res.data.user
        } catch (error) {
            console.log(error)
        }
    }
    return [user,getUser]
}
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const useSignUp = () => {
    const [res,setRes]=useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    
    const signUp = async ({ name, email, password }) => {
        try {
            setRes({
                success: false,
                loading: true,
                status: null,
                data:null,
                error:null
            })
            const url = "/api/users";
            const res = await axios.post(url, {
                name: name,
                email: email,
                password: password
            }, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data.token,
                error: null
            })
            return res
        } catch (err) {
            setRes({
                success: false,
                loading: false,
                status: null,
                data:null,
                error:err.response.status
            })
            console.log(err)
        }
    }
    return [res,signUp]
}



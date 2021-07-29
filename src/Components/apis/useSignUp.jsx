import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const useSignUp = () => {
    const [res,setRes]=useState()
    
    const signUp = async ({ name, email, password }) => {
        try {
            console.log("here are the values : ", name, email, password)
            const user = JSON.stringify({ name, email, password });
            const url = "/api/users";
            console.log(user)
            const res = await axios.post(url, {
                name: name,
                email: email,
                password: password
            }, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
            setRes(res)
            return res
        } catch (err) {
            console.log(err)
        }
    }
    return [res,signUp]
}



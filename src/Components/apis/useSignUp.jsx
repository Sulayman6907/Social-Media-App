import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const useSignUp = () => {
    const history = useHistory()
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
            console.log(res)
            if (res.status === 201) {
                history.push("/feed")
            }
        } catch (err) {
            console.log(err)
        }
    }
    return [signUp]
}



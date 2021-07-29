//WIP
import React, { useEffect } from 'react'
import { NavBar } from '../Feed/NavBar.jsx'
import { Profile } from '../ProfilePage/Profile.jsx'
import axios from 'axios';

export const ProfilePage = () => {
    useEffect(() => {
        getProfileById();
    }, [])
    const getId = async () => {
        try {
            let token = localStorage.getItem("token")
            const id = await axios.get("/api/profile/me", {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            });
            return id.data._id
        } catch (err) {
            console.log("in getprofile catch block", err);
            console.log("========", err.response.statusText);
        }
    };

    const getProfileById = async () => {
        const id = async () => {
            getId();
        }
        let token = localStorage.getItem("token")
        console.log("in getprofilebyid");
        console.log(id)
        try {

            const res = await axios.get(`/api/profile/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            });

            console.log("in getprofile try block", res.data);
        } catch (err) {
            console.log("in getprofile catch block", err);
            console.log("========", err.response.statusText);
        }
    };

    return (
        <div>
            <Profile />
        </div>
    );
};

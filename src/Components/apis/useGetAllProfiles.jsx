import axios from "axios";
import { useState } from "react";

export const useGetAllProfiles= () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const getAllProfiles = async (id) => {
        try {
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const token = localStorage.getItem("token")
            const res = await axios.get(`/api/profile/`, {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            });

            console.log("in Profilestry block", res.data);
            console.log(res)

            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data,
                error: null
            })
        } catch (err) {
            console.log(err)
            setRes({
                success: false,
                loading: false,
                status: null,
                data: null,
                error: err.response.status
            })
        }
    };
    return [res, getAllProfiles]
}
import axios from "axios";
import { useState } from "react";
import { useGetPost } from "./useGetPost";

export const useDoLike = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const doLike = async (id) => {
        try {
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const token = localStorage.getItem("token")
            const res = await axios.put(`/api/posts/like/${id}`, {}, {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json',
                }
            });
            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data,
                error: false
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
    return [res, doLike]
}

import axios from "axios";
import { useState } from "react";

export const useDeletePost = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const doDelete = async (id) => {
        // console.log("liked");
        try {
            console.log("Like is running!")
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const token = localStorage.getItem("token")
            const res = await axios.delete(`/api/posts/${id}` ,{
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
    return [res, doDelete]
}

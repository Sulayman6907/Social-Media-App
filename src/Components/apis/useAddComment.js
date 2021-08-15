import { authAxios } from '../Utility/addToken';
import { useState } from "react";

export const useAddComment = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const addComment = async (id,text) => {
        try {
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const res = await authAxios.put(`/api/posts/comment/${id}`,{ text });
            console.log(res)
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
    return [res, addComment]
}
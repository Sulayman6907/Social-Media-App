import { authAxios } from '../Utility/addToken';
import { useState } from "react";

export const useDeleteComment = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const deleteComment = async (id,commentId) => {
        try {
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const res = await authAxios.delete( `/api/posts/comment/${id}/${commentId}`);
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
    return [res, deleteComment]
}
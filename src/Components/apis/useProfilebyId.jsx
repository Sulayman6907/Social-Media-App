import { authAxios } from '../Utility/addToken';
import { useState } from "react";

export const useProfileById = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const getProfileById = async (id) => {
        try {
            setRes({
                success: false,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const res = await authAxios.get(`/api/profile/user/${id}`);
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
    return [res, getProfileById]
}
import { useState } from 'react';
import { authAxios } from '../Utility/addToken';

export const useGetUser = () => {
    const [res, setRes] = useState({
        success: false,
        loading: true,
        status: null,
        data: null,
        error: null
    })
    const getUser = async () => {
        try {
            const res = await authAxios.get("/api/profile/me");
            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data.user,
                error: null
            })
        } catch (error) {
            setRes({
                success: false,
                loading: false,
                status: null,
                data: null,
                error: error.response.status
            })
            console.log(error)
        }
    }
    return [res, getUser]
}
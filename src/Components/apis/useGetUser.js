import { useState } from 'react';
import { authAxios } from '../Utility/addToken';

export const useGetUser = () => {
    const [res, setRes] = useState({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: null
    })
    const getUser = async () => {
        try {
            setRes({
                success: true,
                loading: true,
                status: null,
                data: null,
                error: null
            })
            const res = await authAxios.get("/api/auth");
            console.log(res)
            setRes({
                success: true,
                loading: false,
                status: res.status,
                data: res.data,
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
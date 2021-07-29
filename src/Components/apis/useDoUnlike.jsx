import axios from "axios";
import { useState } from "react";

export const useDoUnLike = () => {
    const [res,setRes]=useState()
    const doUnlike = async (id) => {
        // console.log("unliked");
        try {
            console.log("Like is running!")
            const token = localStorage.getItem("token")
            const res = await axios.put(`/api/posts/unlike/${id}`, {}, {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json',
                }   
            });
            setRes(res)
            return res

            
        } catch (err) {
            console.log(err)
        }
    };
    return [doUnlike]
}

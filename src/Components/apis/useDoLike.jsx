import axios from "axios";
import { useState } from "react";
import { useGetPost } from "./useGetPost";

export const useDoLike = (posts) => {
    const [res,setRes]=useState()
    const doLike = async (id) => {
        // console.log("liked");
        try {
            console.log("Like is running!")
            const token = localStorage.getItem("token")
            const res = await axios.put(`/api/posts/like/${id}`, {}, {
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
    return [res,doLike]
}

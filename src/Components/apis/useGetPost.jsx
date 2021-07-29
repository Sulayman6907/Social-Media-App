import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

export const useGetPost=()=> {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        getPost();
    },[]);
   
   const getPost = async () => {
     let token = localStorage.getItem("token")
     console.log(token)
     try {
       const res = await axios.get("/api/posts", {
         headers: {
           'x-auth-token': token,
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
         }
       });
       console.log(res.data)
       setPosts(res.data)
     } catch (error) {
       console.log(error)
     }  
   }
   return [posts,getPost]
}
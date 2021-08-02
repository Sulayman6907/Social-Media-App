import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

export const useGetPost=()=> {
    const [postRes,setPostRes]=useState({
      success: false,
      loading: true,
      status: null,
      data: null,
      error: null
  })
   
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
       console.log(res)
       setPostRes({
          success: true,
          loading: false,
          status: res.status,
          data: res.data,
          error: null
       })
       console.log(postRes)      
     } catch (error) {
      setPostRes({
        success: false,
        loading: false,
        status: null,
        data:null,
        error:error.response.status
    })
       console.log(error)
     }  
   }
   return [postRes,getPost]
}
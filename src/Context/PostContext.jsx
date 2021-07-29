import { createContext,useState,useEffect } from "react";
import axios from "axios";
import { useGetPost } from "../Components/apis/useGetPost";

 export const PostContext=createContext([])

 export const PostProvider=(props)=>{
    const [posts, getPost] = useGetPost();
     
    
    return(
        <PostContext.Provider value={{posts,getPost}}>
            {props.children}
        </PostContext.Provider>
    )
 }
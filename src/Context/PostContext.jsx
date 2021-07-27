import { createContext,useState,useEffect } from "react";
import axios from "axios";
import { useGetPost } from "../Components/apis/useGetPost";

 export const PostContext=createContext([])

 export const PostProvider=(props)=>{
    const [posts, setPosts] = useGetPost();
     
    
    return(
        <PostContext.Provider value={{posts,setPosts:(data)=>{console.log("Setposts is called", data); setPosts(data)}}}>
            {props.children}
        </PostContext.Provider>
    )
 }
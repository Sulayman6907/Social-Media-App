import React, { useState, useEffect } from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';

export const Posts = () => {

  let isliked=false;
  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    getPost();
  }, [])

  const like = (id) => async () => {
      // console.log("unliked");
      try {
        console.log("Function is rinning!")
        const token = localStorage.getItem("token")
        const res = await axios.put(`/api/posts/like/${id}`, {}, {
          headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json',
          }
          
        });
        console.log("isliked", isliked)
        
      } catch (err) {
        console.log(err)
      }
    };


    const unlike = (id) => async () => {
      // console.log("unliked");
      try {
        console.log("Function is rinning!")
        const token = localStorage.getItem("token")
        const res = await axios.put(`/api/posts/unlike/${id}`, {}, {
          headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json',
          }
          
        });
        
      } catch (err) {
        console.log(err)
      }
    };  

  return (
    <div>
      {posts.map(({ avatar, name, text,_id,likes}) =>

        <Post  key={_id}  avatar={avatar} name={name} status={text} likes={likes.length} like={like} id={_id} isliked={isliked} unlike={unlike}/>

      )}
    </div>
  )
}

import React, { useState, useEffect,useContext } from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';
import { cloneDeep } from 'lodash';
import { arrayExpression } from '@babel/types';
import { WithPost } from '../../HOCs/WithPost.jsx';

export const PostsComponent = ({posts,setPosts}) => {
  
  let userId= null
  console.log("Component rerendered!!!!")
  const like = async (user,id) => {
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
        console.log(res.data);
        console.log(posts.findIndex(posts => posts._id===id))
        const index=posts.findIndex(posts => posts._id===id)
        // const tempPost={...posts[index],likes: [...posts[index].likes,res.data[0]]}
        const tempPosts=[...posts]
        tempPosts[index].likes.push(res.data[0])
        console.log(tempPosts)
        setPosts(tempPosts)  
      } catch (err) {
        console.log(err)
      }
    };

    const unlike = async (id) => {
      // console.log("unliked");
      try {
        console.log("Unlike is running!")
        const token = localStorage.getItem("token")
        const res = await axios.put(`/api/posts/unlike/${id}`, {}, {
          headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json',
          }  
        });
        const index=posts.findIndex(posts => posts._id===id)
        const tempPosts=[...posts]
        tempPosts[index].likes.pop()
        console.log(tempPosts)
        setPosts(tempPosts)    

      } catch (err) {
        console.log(err)
      }
    };  

    const auth =  async () => {
      try {
        console.log("Auth is running!")
        const token = localStorage.getItem("token")
        const res = await axios.get(`/api/auth`, {
          headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json',
          } 
        });
        console.log(res.data._id)
        return res.data._id;
      } catch (err) {
        console.log(err)  
      }
    };

  return (
    <div>
      {posts.map(({ avatar, name, text,_id,likes,index,user}) =>(
        <Post  key={_id}  avatar={avatar} name={name} status={text} user={user} likes={likes} like={like} id={_id}  unlike={unlike}auth={auth} index={index} userId={userId}/>
      ))}
    </div>
  )
}

export const Posts=WithPost(PostsComponent)
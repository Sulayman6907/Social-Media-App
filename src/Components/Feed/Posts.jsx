import React, { useState, useEffect, useContext } from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';
import { WithPost } from '../../HOCs/WithPost.jsx';
import { useDoLike } from '../apis/useDoLike.jsx';
import { useGetPost } from '../apis/useGetPost.jsx';

export const PostsComponent = ({ statePost, setStatePost }) => {
  const [posts, getPost] = useGetPost();
  const [res,doLike]=useDoLike(statePost)
  let userId = null

  useEffect(() => {
    getPost()
  }, [])

  useEffect(() => {
    setStatePost(posts)
  }, [posts])


  const like = async (id) => {
    await doLike(id)
    console.log(res)
    console.log(id)
    console.log(posts)
    const index=statePost.findIndex(statePost => statePost._id===id)
    console.log(index)
    const tempPosts=[...statePost]
    tempPosts[index].likes.push(res.data)
    console.log(tempPosts)
    setStatePost(tempPosts)  
    
  }

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
      getPost()
      // const index=posts.findIndex(posts => posts._id===id)
      // const tempPosts=[...posts]
      // tempPosts[index].likes.pop()
      // console.log(tempPosts)
      // setPosts(tempPosts)    

    } catch (err) {
      console.log(err)
    }
  };

  const auth = async () => {
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
      {statePost.map(({ avatar, name, text, _id, likes, user }) => (
        <Post key={_id} avatar={avatar} name={name} status={text} user={user} likes={likes} like={like} id={_id} unlike={unlike} auth={auth} userId={userId} />
      ))}
    </div>
  )
}

export const Posts = WithPost(PostsComponent)
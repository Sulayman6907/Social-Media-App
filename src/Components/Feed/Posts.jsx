import React, { useState, useEffect, useContext } from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';
import { WithPost } from '../../HOCs/WithPost.jsx';
import { useDoLike } from '../apis/useDoLike.jsx';
import { useGetPost } from '../apis/useGetPost.jsx';
import { useDoUnLike } from '../apis/useDoUnlike.jsx';

export const PostsComponent = ({ statePost, setStatePost }) => {
  const [posts, getPost] = useGetPost();
  const [res,doLike] = useDoLike()
  const [unlikeRes,doUnLike] = useDoUnLike()
  const[currentPostId,setCurrentPostId]=useState()
  const [errorMessage, setErrorMessage] = useState('');
  let userId = null

  useEffect(() => {
    getPost()
  }, [])

  useEffect(() => {
    setStatePost(posts)
  }, [posts])

  useEffect(()=>{
      console.log(res)
      const index = statePost?.findIndex(statePost => statePost._id === currentPostId)
      const tempPosts = [...statePost]
      if(res?.status === 200){
        tempPosts?.[index]?.likes.push(res.data)
        setStatePost(tempPosts)
      }
      else if (res.error===400){
        setErrorMessage("You have already Liked")
        console.log(errorMessage)
      }
      
  },[res,currentPostId])

  useEffect(()=>{
    console.log(res)
    const index = statePost.findIndex(statePost => statePost._id === currentPostId)
      const tempPosts = [...statePost]
    if(unlikeRes?.status === 200){ 
      tempPosts[index].likes.pop()
      setStatePost(tempPosts)
    }
    else if (unlikeRes.error===400){
      setErrorMessage('') 
    }
    
},[unlikeRes,currentPostId])

  const like = (id) => {
    try {
      doLike(id)
      setCurrentPostId(id)
      
    } catch (err) {
      console.log(err)
    }
  };

  const unlike = async (id) => {
    try {
      doUnLike(id)
      setCurrentPostId(id)
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
        <Post key={_id} avatar={avatar} name={name} status={text} user={user} likes={likes} like={like} id={_id} unlike={unlike} auth={auth} userId={userId} errorMessage={errorMessage} />
      ))}
    </div>
  )
}

export const Posts = WithPost(PostsComponent)
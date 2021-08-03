import React, { useState, useEffect } from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';
import { WithPost } from '../../HOCs/WithPost.jsx';
import { useDoLike } from '../apis/useDoLike.jsx';
import { useGetPost } from '../apis/useGetPost.jsx';
import { useDoUnLike } from '../apis/useDoUnlike.jsx';
import { PostLoader } from '../Loaders/PostLoader.jsx';
import { WithToken } from "../../HOCs/withToken";
import { useGetUser } from '../apis/useGetUser.jsx';
import { useDeletePost } from '../apis/useDeletePost.jsx';


export const PostsComponent = ({ statePost, setStatePost, user, setUser }) => {
  const [postRes, getPost] = useGetPost();
  const [res, doLike] = useDoLike()
  const [unlikeRes, doUnLike] = useDoUnLike()
  const [currentPostId, setCurrentPostId] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [userRes, getUser] = useGetUser()
  const[resDel,doDel]=useDeletePost()

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (userRes) {
      setUser(userRes.data)
    }

  }, [userRes])

  useEffect(() => {
    getPost()
  }, [])

  useEffect(() => {
    console.log(postRes)
    if (postRes.data) {
      setStatePost(postRes.data)
    }
  }, [postRes])

  useEffect(() => {
    const index = statePost?.findIndex(statePost => statePost._id === currentPostId)
    const tempPosts = [...statePost]
    if (res.status === 200) {
      if (tempPosts) {
        tempPosts[index].likes = res.data
        console.log(tempPosts)
        setStatePost(tempPosts)
        setErrorMessage('')
      }

    }
    else if (res.error === 400) {
      setErrorMessage("You have already Liked")
      console.log(errorMessage)
    }

  }, [res, currentPostId])

  useEffect(() => {
    const index = statePost.findIndex(statePost => statePost._id === currentPostId)
    const tempPosts = [...statePost]
    if (unlikeRes.status === 200) {
      tempPosts[index].likes.pop()
      setStatePost(tempPosts)
      setErrorMessage('')
    }
    else if (unlikeRes.error === 400) {
      setErrorMessage('Not liked')
    }

  }, [unlikeRes, currentPostId])

  useEffect(()=>{
    if(resDel.status===200)
    console.log("Post Deleted")
  },[resDel])
   

  const like = (id) => {
    try {
      doLike(id)
      setCurrentPostId(id)

    } catch (err) {
      console.log(err)
    }
  };

  const unlike = async ( id) => {
    try {
      doUnLike(id)
      setCurrentPostId(id)
    } catch (err) {
      console.log(err)
    }
  };

  const del= async (id)=>{
    try{
      doDel(id)
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {postRes.loading ? <PostLoader />
        : statePost.map(({ avatar, name, text, _id, likes,user }) => (
          <Post key={_id} avatar={avatar} name={name} Del ={del} status={text} userPost={user} likes={likes} likeRes={res} like={like} id={_id} unlike={unlike} errorMessage={errorMessage} unlikeRes={unlikeRes} />
        ))
      }
    </div>
  )
}

export const Posts = WithToken(WithPost(PostsComponent))
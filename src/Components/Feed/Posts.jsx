import React, { useState, useEffect } from 'react'
import { Post } from './Post.jsx'
import { WithPost } from '../../HOCs/WithPost.jsx';
import { useDoLike } from '../apis/useDoLike.jsx';
import { useGetPost } from '../apis/useGetPost.jsx';
import { useDoUnLike } from '../apis/useDoUnlike.jsx';
import { PostLoader } from '../Loaders/PostLoader.jsx';
import { WithToken } from "../../HOCs/withToken";
import { useGetUser } from '../apis/useGetUser.jsx';
import { useDeletePost } from '../apis/useDeletePost.jsx';

export const PostsComponent = ({ statePost, setStatePost, user: userContext, setUser }) => {
  const [postRes, getPost] = useGetPost();
  const [res, doLike] = useDoLike()
  const [unlikeRes, doUnLike] = useDoUnLike()
  const [currentPostId, setCurrentPostId] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [userRes, getUser] = useGetUser()
  const [resDel, doDel] = useDeletePost()

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
    if (postRes.data) {
      setStatePost(postRes.data)
    }
  }, [postRes])

  useEffect(() => {
    const index = statePost?.findIndex(statePost => statePost._id === currentPostId)
    const tempPosts = [...statePost]
    if (res.status === 200 && tempPosts) {
      tempPosts[index].likes = res.data
      console.log(tempPosts)
      setStatePost(tempPosts)
      setErrorMessage('')
    }
    else if (res.error === 400) {
      setErrorMessage("You have already Liked")
      console.log(errorMessage)
    }
  }, [res, currentPostId])

  useEffect(() => {
    const index = statePost.findIndex(statePost => statePost._id === currentPostId)
    const tempPosts = [...statePost]
    // const likeIndex=tempPosts[index].likes.findIndex(likes=>likes.user===user._id)
    if (unlikeRes.status === 200) {
      tempPosts[index].likes.pop()
      setStatePost(tempPosts)
      setErrorMessage('')
    }
    else if(unlikeRes.error===400){
      setErrorMessage('Not liked')
    }
    else {
      setErrorMessage('')
    }
  }, [unlikeRes, currentPostId])

  useEffect(() => {
    if (resDel.status === 200) {
      const index = statePost.findIndex(statePost => statePost._id === currentPostId)
      const tempPosts = [...statePost]
      tempPosts.splice(index, 1)
      setStatePost(tempPosts)
    }
  }, [resDel])

  const like = (id) => {
    doLike(id)
    setCurrentPostId(id)
  };

  const unlike = (id) => {
    doUnLike(id)
    setCurrentPostId(id)
  };

  const del = (id) => {
    doDel(id)
    setCurrentPostId(id)
  }

  return (
    <div>
      {postRes.loading ? <PostLoader />
        : statePost.map((props) => (
          <Post key={props._id} props={props}  Del={del} userContext={userContext}  likeRes={res} like={like}  unlike={unlike} errorMessage={errorMessage} unlikeRes={unlikeRes} />
        ))
      }
    </div>
  )
}

export const Posts = WithToken(WithPost(PostsComponent))
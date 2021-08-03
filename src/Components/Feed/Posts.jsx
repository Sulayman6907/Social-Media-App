import React, { useState, useEffect} from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';
import { WithPost } from '../../HOCs/WithPost.jsx';
import { useDoLike } from '../apis/useDoLike.jsx';
import { useGetPost } from '../apis/useGetPost.jsx';
import { useDoUnLike } from '../apis/useDoUnlike.jsx';
import { PostLoader } from '../Loaders/PostLoader.jsx';

export const PostsComponent = ({ statePost, setStatePost }) => {
  const [postRes, getPost] = useGetPost();
  const [res, doLike] = useDoLike()
  const [unlikeRes, doUnLike] = useDoUnLike()
  const [currentPostId, setCurrentPostId] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  let userId = null

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
      tempPosts[index].likes=res.data
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
    if (unlikeRes.status === 200) {
      tempPosts[index].likes.pop()
      setStatePost(tempPosts)
      setErrorMessage('')
    }
    else if (unlikeRes.error === 400) {
      setErrorMessage('Not liked')
    }

  }, [unlikeRes, currentPostId])

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

  return (
    <div>
      {postRes.loading ? <PostLoader />
        : statePost.map(({ avatar, name, text, _id, likes, user }) => (
          <Post key={_id} avatar={avatar} name={name} status={text} user={user} likes={likes} likeRes={res} like={like} id={_id} unlike={unlike}  userId={userId} errorMessage={errorMessage} unlikeRes={unlikeRes}/>
        ))
      }
    </div>
  )
}

export const Posts = WithPost(PostsComponent)
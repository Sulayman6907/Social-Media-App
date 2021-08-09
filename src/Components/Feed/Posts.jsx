import React, { useEffect } from 'react'
import { Post } from './Post.jsx'
import { WithPost } from '../../HOCs/WithPost.jsx';
import { useGetPost } from '../apis/useGetPost.jsx';
import { PostLoader } from '../Loaders/PostLoader.jsx';
import { WithToken } from "../../HOCs/withToken";
import { useGetUser } from '../apis/useGetUser.jsx';

export const PostsComponent = ({ statePost, setStatePost }) => {
  const [postRes, getPost] = useGetPost();

  useEffect(() => {
    getPost()
  }, [])

  useEffect(() => {
    if (postRes.data) {
      setStatePost(postRes.data)
    }
  }, [postRes])

  return (
    <div>
      {postRes.loading ? <PostLoader />
        : statePost.map((post) => (
          <Post key={post._id} post={post}  />
        ))
      }
    </div>
  )
}

export const Posts = WithToken(WithPost(PostsComponent))
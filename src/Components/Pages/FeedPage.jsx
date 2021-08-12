import React from 'react'
import { Posts } from '../Feed/Posts.jsx'
import { CreatePosts } from '../Feed/CreatePosts.jsx'

export const FeedPage = () => {
  return (
    <>
        <CreatePosts />
        <Posts />
    </>
  );
};



import React from 'react'
import { Posts } from '../Feed/Posts.jsx'
import { CreatePosts } from '../Feed/CreatePosts.jsx'
import {MiniDashboard} from '../Dashboard/MiniDashboard.jsx'

export const FeedPage = () => {
  return (
    <>
        <MiniDashboard />
        <CreatePosts />
        <Posts />
    </>
  );
};



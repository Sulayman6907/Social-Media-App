import React from 'react'
import styled from 'styled-components'
import { Posts } from '../Feed/Posts.jsx'
import { NavBar } from '../Feed/NavBar.jsx'
import { CreatePosts } from '../Feed/CreatePosts.jsx'
import {MiniDashboard} from '../Dashboard/MiniDashboard.jsx'
import { PostLoader } from '../Loaders/PostLoader.jsx'

export const FeedPage = () => {
  return (
    <>
        <MiniDashboard />
        <CreatePosts />
        <Posts />
    </>
  );
};



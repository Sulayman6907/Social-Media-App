import React from 'react'
import styled from 'styled-components'
import { Posts } from '../Feed/Posts.jsx'
import { NavBar } from '../Feed/NavBar.jsx'
import { CreatePosts } from '../Feed/CreatePosts.jsx'

export const FeedPage = () => {
  return (
    <>
        <NavBar />
        <CreatePosts />
        <Posts />
    </>
  );
};



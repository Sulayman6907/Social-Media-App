import React from 'react'
import styled from 'styled-components'
import {Posts} from '../Feed/Posts'
import { NavBar } from '../Feed/NavBar'
import { PostMap } from '../Feed/PostMap'
import { CreatePosts } from '../Feed/CreatePosts'

 export const FeedPage = () => {
   return (
    <>
      <NavBar/>
      <CreatePosts/>
      <PostMap />
    </>
  );
};



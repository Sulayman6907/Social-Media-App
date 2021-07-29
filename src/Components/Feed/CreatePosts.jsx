import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { WithPost } from "../../HOCs/WithPost";
import { useCreatePost } from "../apis/useCreatePost";

export const CreatePostsComponent = ({ statePost, setStatePost }) => {
  const [postText, setPostText] = useState("")
  const [addPost] = useCreatePost()

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const res = await addPost(postText)
    if (res.status === 200) {
      const tempPost = [res.data, ...statePost];
      setStatePost(tempPost)
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <label>Add your Status</label>
      <CustomText
        name="commentTextArea"
        type="text"
        id="CommentsOrAdditionalInformation"
        value={postText}
        onChange={e => setPostText(e.target.value)}
      >
      </CustomText>
      <button type="submit" value="Submit"> Submit </button>
    </Container>
  )
}

const Container = styled.form`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  border-color: black;
  border-style: solid;
  margin-left: 200px;
  margin-right: 200px;
  height: 100%;
  align-item: center;
  padding: 0 2rem;
  margin-bottom: 30px;  
`
const CustomText = styled.textarea`
  width: 100%;
`
export const CreatePosts = WithPost(CreatePostsComponent)
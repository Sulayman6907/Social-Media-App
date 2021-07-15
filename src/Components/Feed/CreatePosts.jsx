 import React, { useState } from "react";
 import styled from "styled-components";
 import axios from "axios";

 export const CreatePosts = () => {
  const [commentText,setCommentText] = useState("")

  const addPost = (text) => async () => {
    try {
      console.log("in add post with text ", text);
      const token=localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        }
      };
      const res = await axios.post("/api/posts", { text: text }, config);
      console.log(res)
      
    } catch (err) {
      console.log(err)
    }
  };  

  const handleSubmit = (evt) => {
  evt.preventDefault();
  console.log(commentText)
  addPost(commentText)
  console.log("Post is added!")
          
  }

 return (
    <form  onSubmit={handleSubmit} >
      <Container>
        <label>Add your Status</label>
          <CustomText
            name = "commentTextArea"
            type="text"
            id="CommentsOrAdditionalInformation"
            value = {commentText}
            onChange={e => setCommentText(e.target.value)}
          >
          </CustomText> 
          <input type = "submit"  onClick={ addPost(commentText)} value="Submit"/>
      </Container>
    </form>
  )
}

const Container = styled.div`
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
const CustomText=styled.textarea`
  width: 100%;
`
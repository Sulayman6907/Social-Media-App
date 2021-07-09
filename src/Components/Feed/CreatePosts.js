 import React, { useState } from "react";
 import styled from "styled-components";
 import axios from "axios";

 export const CreatePosts = () => {
 const [commentText,setCommentText] = useState("")

 const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(commentText)
          
    }
 return (
    <>
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
      <input type = "submit" value="Submit"/>
    </Container>
    </form>
    </>
  )
}

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  border-color:black;
  border-style:solid;
  margin-left:200px;
  margin-right:200px;
  height: 100%;
  align-item:center;
  padding: 0 2rem;
  margin-bottom:30px;  
`
const CustomText=styled.textarea`
width:100%
`
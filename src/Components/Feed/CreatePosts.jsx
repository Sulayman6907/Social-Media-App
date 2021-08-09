import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WithPost } from "../../HOCs/WithPost";
import { useCreatePost } from "../apis/useCreatePost";
import { Spinner, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CreatePostsComponent = ({ statePost, setStatePost }) => {
  const [postText, setPostText] = useState("")
  const [res, addPost] = useCreatePost()

  useEffect(() => {
    if (res.status === 200) {
      const tempPost = [res.data, ...statePost];
      setStatePost(tempPost)
    }
  }, [res])

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    addPost(postText)
    setPostText("")
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Customh2>Add your Status</Customh2>
      <CustomText
        name="commentTextArea"
        type="text"
        id="CommentsOrAdditionalInformation"
        value={postText}
        placeholder="Write your status..."
        onChange={e => setPostText(e.target.value)}
      >
      </CustomText>
      {res.loading ? <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>
        : <CustomButton type="submit" value="Submit"> Submit </CustomButton>
      }
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
  text-align: center;
  padding: 0 2rem;
  margin-bottom: 30px;  
`
const CustomText = styled.textarea`
  width: 100%;
`
const CustomButton=styled.button`
    width: 10%;
    height: 40px;
    border: none;
    margin: 1rem 0;
    margin-top: 20px;
    margin-right: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background-color: #FF0000;
    color: white ;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`
const Customh2=styled.h2`
  font-family: Arial;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const CreatePosts = WithPost(CreatePostsComponent)
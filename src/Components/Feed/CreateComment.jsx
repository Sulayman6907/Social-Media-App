import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAddComment } from "../apis";
import { WithComment } from "../../HOCs/withComment";

const CreateCommentComponent = ({ id, setComments }) => {
  const [commentText, setCommentText] = useState("")
  const [res, addComment] = useAddComment()

  useEffect(() => {
    if (res.success) {
      setComments(res.data)
    }
  }, [res])

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    addComment(id, commentText)
    setCommentText("")
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Customh2>Post your Comment</Customh2>
      <CustomText
        name="commentTextArea"
        type="text"
        id="CommentsOrAdditionalInformation"
        value={commentText}
        placeholder="Write your status..."
        onChange={e => setCommentText(e.target.value)}
      >
      </CustomText>
      <CustomButton type="submit" value="Submit">
        {res.loading ?
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </>
          : "Comment"}
      </CustomButton>
    </Container>
  )
}

const CustomText = styled.textarea`
  width: 100%;
`

const CustomButton = styled.button`
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
`

const Customh2 = styled.h2`
  font-family: Arial;
  margin-top: 10px;
  margin-bottom: 10px;
`
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

export const CreateComment = WithComment(CreateCommentComponent)
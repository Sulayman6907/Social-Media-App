import React, { useEffect } from 'react'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

export const Post = ({ avatar, name, status, likes, like, unlike, id,  userPost,userContext, errorMessage, likeRes, unlikeRes,Del }) => {
    
    return (
        <Container>
            <div>
                <DivImg>
                    <AvatarImg src={avatar} alt="new" />
                </DivImg>
                <Customh1>{name}</Customh1>
            </div>
            <Status>
                <Customh1>Status</Customh1>
                <StatusText>"  {status} "</StatusText>

                {likeRes.loading ? <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                </Button>
                    : <Like onClick={() => like(id)} > like</Like>
                }
                {unlikeRes.loading ? <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                </Button>
                    : <Dislike onClick={() => unlike(id)}>Unlike</Dislike>

                }
                {userContext?._id === userPost?
                      <button
                        type="button"
                        onClick={() => Del(id)}
                      >
                        delete
                      </button>
                    : <span></span>}

                {errorMessage && (
                    <p> {errorMessage} </p>
                )}
                
                <LikesCounter >Total likes : {likes.length} </LikesCounter>
            </Status>
        </Container>
    )
}

const Container = styled.div`
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: 1px solid #363636;
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
`
const Customh1 = styled.h1`
    text-align:center;
`

const Status = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: left;
    justify-context: left;
    flex-direction: column;
    align-items: center;
`
const StatusText = styled.h3`
    padding-top: 30px;
`

const Like = styled.button`
    margin-top: 30px;
    width: 100px;
    background-color: green;
    color: white;
`
const Dislike = styled.button`
    margin-top: 30px;
    width: 100px;
    background-color: red;
    color: white;
`
const Comment = styled.button`
    margin-top: 30px;
    width: 100px;
    background-color: blue;
    color: white;
`
const LikesCounter = styled.div`
    margin-top: 30px
`

const AvatarImg = styled.img`
    height: 200px:
    width: 200px; 
    border-radius: 100px;
    display: inline;
    padding-top: 10px;
`

const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `


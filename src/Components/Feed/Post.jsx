import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { WithToken } from '../../HOCs/withToken';
import { WithPost } from '../../HOCs/WithPost';
import { useEffect, useState } from 'react';
import { useDoLike, useDoUnLike, useDeletePost } from '../apis';

export const PostComponent = ({ post, user, statePost, setStatePost }) => {
    const [likeRes, doLike] = useDoLike()
    const [unlikeRes, doUnLike] = useDoUnLike()
    const [currentPostId, setCurrentPostId] = useState()
    const [errorMessage, setErrorMessage] = useState('');
    const [resDel, doDel] = useDeletePost()

    useEffect(() => {
        const index = statePost?.findIndex(statePost => statePost._id === currentPostId)
        const tempPosts = [...statePost]
        if (likeRes.status === 200 && tempPosts) {
            tempPosts[index].likes = likeRes.data
            setStatePost(tempPosts)
            setErrorMessage('')
        } else if (likeRes.error === 400) {
            setErrorMessage("You have already Liked")
        } else {
            setErrorMessage('')
        }
    }, [likeRes, currentPostId])

    useEffect(() => {
        const index = statePost.findIndex(statePost => statePost._id === currentPostId)
        const tempPosts = [...statePost]
        if (unlikeRes.status === 200) {
            const likesArray = tempPosts[index].likes
            const likeIndex = likesArray.findIndex(likesArray => likesArray.user === user._id)
            tempPosts[index].likes.splice(likeIndex, 1)
            setStatePost(tempPosts)
            setErrorMessage('')
        } else if (unlikeRes.error === 400) {
            setErrorMessage('Not liked')
        } else {
            setErrorMessage('')
        }
    }, [unlikeRes, currentPostId])

    useEffect(() => {
        if (resDel.status === 200) {
            const index = statePost.findIndex(statePost => statePost._id === currentPostId)
            const tempPosts = [...statePost]
            tempPosts.splice(index, 1)
            setStatePost(tempPosts)
        }
    }, [resDel])

    const like = (id) => {
        doLike(id)
        setCurrentPostId(id)
    };

    const unlike = (id) => {
        doUnLike(id)
        setCurrentPostId(id)
    };

    const del = (id) => {
        doDel(id)
        setCurrentPostId(id)
    };

    return (
        <Container>
            <div>
                <DivImg>
                    <AvatarImg src={post.avatar} alt="new" />
                </DivImg>
                <Customh1>{post.name}</Customh1>
            </div>
            <Status>
                <Customh1>Status</Customh1>
                <StatusText>"  {post.text} "</StatusText>
                <Like onClick={() => like(post._id)} disable={likeRes.loading}> {likeRes.loading ?
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
                    : 'Like'}
                </Like>
                <Dislike onClick={() => unlike(post._id)} disable={unlikeRes.loading}> {unlikeRes.loading ?
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
                    : 'Unlike'}</Dislike>
                {user?._id === post.user ?
                    <Delete
                        type="button"
                        onClick={() => del(post._id)}
                    >
                        {resDel.loading ?
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
                            : 'Delete'
                        }
                    </Delete>
                    : null
                }
                {errorMessage && (
                    <p> {errorMessage} </p>
                )}
                <LikesCounter >Total likes : {post.likes.length} </LikesCounter>
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
    width: 15%;
    height: 40px;
    border: none;
    margin: 1rem 0;
    margin-top: 20px;
    margin-right: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background-color: green;
    color: white ;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
`
const Dislike = styled.button`
    width: 15%;
    height: 40px;
    border: none;
    margin: 1rem 0;
    margin-top: 20px;
    margin-right: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background-color: blue;
    color: white ;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
`
const Delete=styled.button`
    width: 15%;
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

export const Post = WithToken(WithPost(PostComponent))
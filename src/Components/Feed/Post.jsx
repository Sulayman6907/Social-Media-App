import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { WithToken } from '../../HOCs/withToken';
import { WithPost } from '../../HOCs/WithPost';
import { useEffect, useState } from 'react';
import { useDoLike } from '../apis/useDoLike.jsx';
import { useDoUnLike } from '../apis/useDoUnlike.jsx';
import { useDeletePost } from '../apis/useDeletePost.jsx';

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
            console.log(tempPosts)
            setStatePost(tempPosts)
            setErrorMessage('')
        }
        else if (likeRes.error === 400) {
            setErrorMessage("You have already Liked")
            console.log(errorMessage)
        }
    }, [likeRes, currentPostId])

    useEffect(() => {
        const index = statePost.findIndex(statePost => statePost._id === currentPostId)
        const tempPosts = [...statePost]
        // const likeIndex=tempPosts[index].likes.findIndex(likes=>likes.user===user._id)
        if (unlikeRes.status === 200) {
            tempPosts[index].likes.pop()
            setStatePost(tempPosts)
            setErrorMessage('')
        }
        else if (unlikeRes.error === 400) {
            setErrorMessage('Not liked')
        }
        else {
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
    }

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
                    : <Like onClick={() => like(post._id)} > like</Like>
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
                    : <Dislike onClick={() => unlike(post._id)}>Unlike</Dislike>
                }
                {user?._id === post.user ?
                    <button
                        type="button"
                        onClick={() => del(post._id)}
                    >
                        delete
                    </button>
                    : <span></span>
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
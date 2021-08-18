import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";
import { WithToken } from "../../HOCs/withToken";
import { useDeleteComment } from "../apis";
import { useEffect } from "react";
import { WithComment } from "../../HOCs/withComment";

export const CommentsComponent = ({ comments, user, id, setComments }) => {
    const [res, deleteComment] = useDeleteComment()


    useEffect(() => {
        if (res.success) {
            setComments(res.data)
        }
    }, [res])

    return (
        <>
            {comments !== [] &&
                comments.map((comment, index) => (
                    <Container key={index}>
                        <div>
                            <DivImg>
                                <AvatarImg src={comment.avatar} alt="new" />
                            </DivImg>
                            <Link to={`/profile/${comment.user}`}><Customh1>{comment.name}</Customh1></Link>
                        </div>
                        <Status>
                            <Customh1>Status</Customh1>
                            <StatusText>"  {comment.text} "</StatusText>
                            {user._id === comment.user && (
                            <Delete
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteComment(id, comment._id)}
                            >
                                Delete
                            </Delete>
                        )}
                        </Status>
                        
                    </Container>
                ))}
            {comments.length === 0 ?
                <Customh1>There are not comments</Customh1>
                : null}
        </>
    );
}

const Customh1 = styled.h1`
    text-align: center;
`

const Status = styled.div`
    margin-left: auto;
    margin-right: auto;
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

const Container = styled.div`
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: 1px solid #363636;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`

const Delete = styled.button`
    width: 60%;
    height: 40px;
    border: none;
    margin: 1rem 0;
    margin-top: 20px;
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

export const Comments = WithComment(WithToken(CommentsComponent))
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

export const Comments = ({ comments }) => {
    return (
        <>
        <Container>
            {comments !== [] &&
                comments.map(comment => (
                    <>
                    <div>
                        <DivImg>
                            <AvatarImg src={comment.avatar} alt="new" />
                        </DivImg>
                        <Link to ={`/profile/${comment.user}`}><Customh1>{comment.name}</Customh1></Link>
                    </div>
                    <Status>
                    <Customh1>Status</Customh1>
                    <StatusText>"  {comment.text} "</StatusText>
                </Status>
                </>
                ))}   
        </Container>
        {comments.length===0?
            <Customh1>There are not comments</Customh1>
        : null } 
        </>
    );
}


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
    flex-direction: column;
    margin-bottom:30px;
`
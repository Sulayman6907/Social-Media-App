import React from 'react'
import styled from 'styled-components'

 export const Posts = ({posts}) => {
    
    return (
        <Container>
        <div>
            {posts.map(({avatar,name})=>
            <>
            <div>
            <img src={avatar} alt="new" style ={{height : "200px", width: "200px", borderRadius: "100px", display: "inline" , paddingTop:"10px"}}/>
            </div>
            
            <h1 style={{marginLeft:"30px"}}>{name}</h1>
            </>
            )}
            
            
        </div>
        <Status >
        {posts.map(({status})=>
        <>
            <h1>Status</h1>
            <StatusText>"  {status} "</StatusText>
            <Like>Like</Like>
            <Dislike>Dislike</Dislike>
            <Comment>Comment</Comment>
            </>
        )}
            
            
        </Status>
        </Container>
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
  display: flex;
  padding: 0 2rem;
  
`
;
const Status=styled.div`
padding-top:30px;
margin-left: 300px;
`
const StatusText=styled.h3`
padding-top:30px;`

const Like=styled.button`
margin-top:30px;
margin-left:-100px;
width:100px;
background-color: green;
color:white;
`
const Dislike=styled.button`
margin-top:30px;
margin-left :20px;
width:100px;
background-color: red;
color:white;
`
const Comment=styled.button`
margin-top:30px;
margin-left :20px;
width:100px;
background-color: blue;
color:white;
`
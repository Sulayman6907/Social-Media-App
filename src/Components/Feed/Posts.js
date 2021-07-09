import React,{useState, useEffect} from 'react'
import styled from 'styled-components'

export const Posts = ({avatar,name,status,likes,dislikes,liked, like,unlike}) => {
    const [count, setcount] = useState(likes);
    const[checkliked,setliked]=useState(liked)
    
    useEffect(() => {
        if(!liked){
            setcount(count-1)
        }
        else{
            setcount(count+1)
        }
    }, [liked])
    
    return (
        
        <Container>
            <div>
                <img src={avatar} alt="new" style ={{height : "200px", width: "200px", borderRadius: "100px", display: "inline" , paddingTop:"10px"}}/>
                <h1 style={{marginLeft:"30px"}}>{name}</h1>
            </div>
            <Status>
                <h1>Status</h1>
                <StatusText>"  {status} "</StatusText>
                <Like onClick={like} style={ {backgroundColor: liked?'green':'black'} }> like</Like>
                <Dislike onClick={unlike}>Unlike</Dislike>
                <Comment onClick={()=> console.log(liked)}>Comment</Comment>
                <LikesCounter >Total likes : {count} </LikesCounter>  
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
  margin-bottom:30px;
`
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
const LikesCounter=styled.div`
margin-top:30px`

const DislikesCounter=styled.div`
margin-top:30px;`

const CustomText=styled.textarea`
width:100%;
margin-left:-50px;
margin-top:20px;
`


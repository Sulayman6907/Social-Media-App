import React, { useState ,useEffect} from 'react'
import { Post } from './Post.jsx'
import axios from 'axios';

const data=[
    {
      name: "Sulayman",
      avatar: "https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/194711225_2983390401985191_1495320275213563202_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGULRKaxMFieLKnJQwSAS5lHHt_cUXcMe0ce39xRdwx7aojh5121gVFGgzR8X8y4MQM4LSMYkcEPnY6cD9R94V9&_nc_ohc=a7UNbrKqS3QAX_3lvi9&_nc_ht=scontent.fisb1-1.fna&oh=70e3b5cda6239122c30da5c4954a9a98&oe=60E2B317",
      status: "I am Happy",
      likes: 32,
      dislikes: 10,
      liked: true,
      key : 1
      
    },
    {
      name: "Sulayman",
      avatar: "https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/194711225_2983390401985191_1495320275213563202_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGULRKaxMFieLKnJQwSAS5lHHt_cUXcMe0ce39xRdwx7aojh5121gVFGgzR8X8y4MQM4LSMYkcEPnY6cD9R94V9&_nc_ohc=a7UNbrKqS3QAX_3lvi9&_nc_ht=scontent.fisb1-1.fna&oh=70e3b5cda6239122c30da5c4954a9a98&oe=60E2B317",
      status: "I am Happy",
      likes: 20,
      dislikes: 17,
      liked: false,
      key : 2
      
    },
    {
      name: "Usman",
      avatar: "https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/194711225_2983390401985191_1495320275213563202_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGULRKaxMFieLKnJQwSAS5lHHt_cUXcMe0ce39xRdwx7aojh5121gVFGgzR8X8y4MQM4LSMYkcEPnY6cD9R94V9&_nc_ohc=a7UNbrKqS3QAX_3lvi9&_nc_ht=scontent.fisb1-1.fna&oh=70e3b5cda6239122c30da5c4954a9a98&oe=60E2B317",
      status: "Life is hard ;-;",
      likes: 110,
      dislikes: 7,
      liked: false,
      key : 3
      
    },
    {
      name: "Usman",
      avatar: "https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/194711225_2983390401985191_1495320275213563202_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGULRKaxMFieLKnJQwSAS5lHHt_cUXcMe0ce39xRdwx7aojh5121gVFGgzR8X8y4MQM4LSMYkcEPnY6cD9R94V9&_nc_ohc=a7UNbrKqS3QAX_3lvi9&_nc_ht=scontent.fisb1-1.fna&oh=70e3b5cda6239122c30da5c4954a9a98&oe=60E2B317",
      status: "Life is hard ;-;",
      likes: 110,
      dislikes: 7,
      liked: false,
      key : 4
      
    }
  ];

export const Posts = () => {

    const[posts,setPosts]=useState(data);
  
    const like=(key)=>{
        const tempPosts= posts.map((post)=>post.key==key?{...post,liked:true}:post)
        setPosts(tempPosts)
        
    }

    const unLike=(key)=>{
      const tempPosts= posts.map((post)=>post.key==key?{...post,liked:false}:post)
      setPosts(tempPosts)
    } 

    return (
        <div>
            {posts.map(({avatar,name,status,likes,dislikes,key,liked}) => 
        
        <Post key ={key} liked={liked} avatar={avatar} name={name} status={status} likes={likes} dislikes={dislikes} like={()=> like(key) } unlike={()=> unLike(key)}/>
        
        )}
        </div>
      )
}

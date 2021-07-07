import React from 'react'
import styled from 'styled-components'

import {Posts} from '../MainPage/Posts'
import { NavBar } from '../MainPage/NavBar'
import {PostExample} from '../MainPage/PostExample'

const App = () => {
  const Jsondata=[
    {
      name: "Sulayman",
      avatar: "https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/194711225_2983390401985191_1495320275213563202_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGULRKaxMFieLKnJQwSAS5lHHt_cUXcMe0ce39xRdwx7aojh5121gVFGgzR8X8y4MQM4LSMYkcEPnY6cD9R94V9&_nc_ohc=a7UNbrKqS3QAX_3lvi9&_nc_ht=scontent.fisb1-1.fna&oh=70e3b5cda6239122c30da5c4954a9a98&oe=60E2B317",
      status: "I am Happy",
      
    }
  ];
  
  return (
    <>
    <NavBar/>
    <Posts posts={Jsondata}/>
    
    </>
  )
}


export default App

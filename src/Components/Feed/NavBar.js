import React from 'react'
import styled from 'styled-components'

export const NavBar = () => {
    return (
        <Container>
            <CustomUl>
                <Header> Fakebook 2.0</Header>
                <Customachor href="/main"><CustomLi> Posts</CustomLi></Customachor>
                <Customachor href="/profile"><CustomLi> profile</CustomLi></Customachor>
                <Customachor href="/"><CustomLi> Logout</CustomLi></Customachor>
            </CustomUl>
        </Container>
    )
}

const Container=styled.div`
min-height:80px;
background-color: black;
margin-bottom:50px;
`
const Header=styled.h1`
text-align: left;
color: white;
padding-top:20px;
`
const CustomUl=styled.ul`
display: flex;
align-items: stretch; /* Default */
justify-content: space-between;
width: 100%;
`
const CustomLi=styled.li`
display: block;
background-color:white;
color:black;
padding-top:30px;
height:50%;
font-size:20px;
list-style-type: none;
padding: 20px;
border-color:black;
border-width:2px;  
border-style:solid;
`
const Customachor=styled.a`
text-decoration:none;`

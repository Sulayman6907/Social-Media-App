import React from 'react'
import styled from 'styled-components'

export const Avatar = ({avatar}) => {
    return (
        <Container>
            <CustomImg src={avatar} alt="Avatar" />
        </Container>   
    )
}

const Container=styled.div`
    min-width: 400px;
    min-height: 200px;
    margin-left: 200px;
    margin-right: 200px;
    height: 100%;
    padding: 0 2rem;
    margin-bottom: 30px;
`
const CustomImg= styled.img`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    margin-top: -200px;
    margin-left: 425px;
`
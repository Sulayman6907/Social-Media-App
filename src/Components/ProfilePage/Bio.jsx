import React from 'react'
import styled from 'styled-components'

export const Bio = () => {
    return (
        <Container>
            <Customh1>
                Bio
            </Customh1>
            <Customh2>
                This is Sulayman.I'm 22 years old and I'm learning react.
            </Customh2>
        </Container>
    )
}

const Container = styled.div`
    min-width: 400px;
    min-height: 200px;
    background-color: white;
    margin-left: 200px;
    margin-right: 200px;
    height: 100%;
    padding: 0 2rem;  
`
const Customh1 = styled.h1`
    text-align: center;
    margin-top: -150px;
`
const Customh2 = styled.h2`
    text-align: center;
    margin-top: 30px
`
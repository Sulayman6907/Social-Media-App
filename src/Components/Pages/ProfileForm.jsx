import React from 'react'
import { NavBar } from '../Feed/NavBar.jsx'
import { ProfileData } from '../ProfilePage/ProfileData'
import styled from 'styled-components'


export const ProfileForm = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <ProfileData/>
            </Container>
        </div>
    )
}

const Container=styled.div`
    margin-left: 200px;
    margin-right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    
`
import React from "react"
import styled from "styled-components"
import { PostLoader } from "../Loaders/PostLoader"

export const ProfileHeader = ({ profile }) => {

  return (
    <CustomDiv>
      {profile ?
        <>
          <DivImg>
            <AvatarImg src={profile.user.avatar} />
          </DivImg>
          <Status>
            <h1 >{profile.user.name}</h1>
            <p >{profile.status}</p>
            <p>{profile.location}</p>
          </Status>
        </>
        : <PostLoader />}
    </CustomDiv>
  )
}

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

const CustomDiv = styled.div`
  border-bottom: 5px solid red;
`

const Status = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: left;
  justify-context: left;
  flex-direction: column;
  align-items: center;
`
import React from "react"
import { PostLoader } from "../Loaders/PostLoader"
import styled from "styled-components"

export const ProfileAbout = ({ profile }) => {

    return (
        <CenterDiv >
            {profile ?
                <>
                    <CenterText >{`${profile.user.name}'s Bio`}</CenterText>
                    <p>{profile.bio}</p>
                    <CenterText >Skill Set</CenterText>
                    <div >
                        {profile.skills.map((skill, index) => (
                            <div key={index} >
                                {skill}
                            </div>
                        ))}
                    </div>
                </>
                : <PostLoader/>}
        </CenterDiv>
    )
}

const CenterDiv = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: left;
    justify-context: left;
    flex-direction: column;
    align-items: center;
    border-bottom: 5px solid red;
`

const CenterText = styled.h3`
    text-align: center;
    border-bottom: 2px solid red;
`
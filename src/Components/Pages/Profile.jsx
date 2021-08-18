import React from "react"
import { ProfileHeader } from "../ProfilePage/ProfileHeader"
import { useParams } from "react-router"
import { useProfileById } from "../apis/useProfilebyId"
import { useEffect } from "react"
import { ProfileAbout } from "../ProfilePage/ProfileAbout"
import { EduExp } from "../ProfilePage/EduExp"
import styled from "styled-components"

export const Profile = () => {
    const { id } = useParams()
    const [res, getProfileById] = useProfileById()

    useEffect(() => {
        getProfileById(id)
    }, [])

    return (
        <Container>
            <ProfileHeader profile={res.data} />
            <ProfileAbout profile={res.data} />
            <EduExp profile={res.data} />
        </Container>
    )
}

const Container = styled.div`
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: 1px solid #363636;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
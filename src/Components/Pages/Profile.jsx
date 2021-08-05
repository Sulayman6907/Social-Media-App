import React from "react"
import { ProfileHeader } from "../ProfilePage/ProfileHeader"
import { useParams } from "react-router"
import { useProfileById } from "../apis/useProfilebyId"
import { useEffect } from "react"
import { ProfileAbout } from "../ProfilePage/ProfileAbout"
import { EduExp } from "../ProfilePage/EduExp"


export const Profile = () => {
    const { id } = useParams()
    const [res, getProfileById] = useProfileById()

    useEffect(() => {
        getProfileById(id)
    }, [])


    return (
        <div>
            <ProfileHeader profile={res.data} />
            <ProfileAbout profile={res.data} />
            <EduExp profile={res.data} />
        </div>
    )

}
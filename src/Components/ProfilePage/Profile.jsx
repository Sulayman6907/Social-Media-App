import React from "react"
import { ProfileHeader } from "./ProfileHeader"
import { Profiles } from "./Profiles"
import { useParams } from "react-router"
import { useProfileById } from "../apis/useProfilebyId"
import { useEffect } from "react"
import { ProfileAbout } from "./ProfileAbout"
import { EduExp } from "./EduExp"

export const Profile = () => {
    const { id } = useParams()
    const [res, getProfileById] = useProfileById()

    useEffect(() => {
        getProfileById(id)
    }, [])

    useEffect(() => {
        if (res.status === 200) {
            console.log(res)
        }
    }, [res])

    return (
        <div>
            <ProfileHeader profile={res.data} />
            <ProfileAbout profile={res.data} />
            <EduExp profile={res.data} />
        </div>
    )

}
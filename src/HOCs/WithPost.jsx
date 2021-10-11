import React from "react"
import { useContext } from "react"
import { PostContext } from "../Context/PostContext"

export const WithPost = (Component) => {
    const Consumer = (props) => {
        const context = useContext(PostContext)
        return <Component {...props} {...context} />
    }
    return Consumer
}
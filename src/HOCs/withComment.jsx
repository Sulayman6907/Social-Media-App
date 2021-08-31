import React from "react"
import { useContext } from "react"
import { CommentContext } from "../Context/CommentContext"

export const WithComment = (Component) => {
    const Consumer = (props) => {
        const context = useContext(CommentContext)
        return <Component {...props} {...context} />
    }
    return Consumer
}
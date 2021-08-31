import React from "react"
import { useContext } from "react"
import { UserContext } from "../Context/userContext"

export const WithToken = (Component) => {
    const Consumer = (props) => {
        const context = useContext(UserContext)
        return <Component {...props} {...context} />
    }
    return Consumer
}
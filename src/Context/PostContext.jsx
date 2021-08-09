import { createContext, useState } from "react";

export const PostContext = createContext([])

export const PostProvider = (props) => {
    const [statePost, setStatePost] = useState([])

    return (
        <PostContext.Provider value={{ statePost, setStatePost }}>
            {props.children}
        </PostContext.Provider>
    )
}
import { createContext, useState } from "react";

export const UserContext = createContext("")

export const UserProvider = (props) => {
    const [user, setUser] = useState()
    const[isLoggedIn,setIsLoggedIn]=useState(false)

    return (
        <UserContext.Provider value={{ user, setUser,isLoggedIn,setIsLoggedIn }}>
            {props.children}
        </UserContext.Provider>
    )
}
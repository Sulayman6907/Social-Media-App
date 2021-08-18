import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WithToken } from '../../HOCs/withToken';
import { useGetUser } from '../apis/useGetUser';
import { useEffect, useState } from 'react';
import { PostLoader } from "../Loaders/PostLoader";

export const PrivateRouteComponent = ({ component: Component, user, setUser, isLoggedIn, setIsLoggedIn, ...rest }) => {
    const [res, getUser] = useGetUser()
    const [isloading,setIsLoading]=useState(true)

    useEffect(() => {
        if (!user) {
            setIsLoading(true)
            const token = localStorage.getItem("token")
            if (token) {
                getUser()
            }else{
                setIsLoading(false)
                
            }
        }
    }, [])

    useEffect(() => {
        if (res.status === 200 || 304) {
            const token = localStorage.getItem("token")
            setUser(res.data)
            setIsLoggedIn(true)
            if(!token){
                setIsLoggedIn(false)
            }
            
            setIsLoading(false)
        }else{
            setIsLoading(false)
        }
    }, [res])

    return (

        <Route {...rest} render={props => (
            isloading ?(
                <PostLoader />
                ): isLoggedIn ? (
                    <Component {...props} />
                    ): <Redirect to="/login" />
                
        )} />
        );
    };
    
    export const PrivateRoute = WithToken(PrivateRouteComponent)
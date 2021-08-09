import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WithToken } from '../../HOCs/withToken';
import { useGetUser } from '../apis/useGetUser';
import { useEffect } from 'react';
import { PostLoader } from "../Loaders/PostLoader";

export const PrivateRouteComponent = ({ component: Component, user, setUser, isLoggedIn, setIsLoggedIn, ...rest }) => {
    const [res, getUser] = useGetUser()

    useEffect(() => {
        if (!user) {
            setIsLoggedIn(false)
            const token = localStorage.getItem("token")
            if (token) {
                getUser()
            }
        }
    }, [])

    useEffect(() => {
        if (res.status === 200 || 304) {
            setUser(res.data)
            setIsLoggedIn(true)
        }
    }, [res])

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            res.loading ?
                <PostLoader />
                : isLoggedIn ?
                    <Component {...props} />
                    : <Redirect to="/login" />
        )} />
    );
};

export const PrivateRoute = WithToken(PrivateRouteComponent)


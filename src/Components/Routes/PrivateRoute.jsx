//WIP
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WithToken } from '../../HOCs/withToken';
import { useGetUser } from '../apis/useGetUser';
import { useEffect } from 'react';
import { UserContext } from '../../Context/userContext';
import { useRef } from 'react';

export const PrivateRouteComponent = ({ component: Component, user, setUser,isLoggedIn, ...rest }) => {
    const [res, getUser] = useGetUser()

    useEffect(() => {
        if (!user) {
            const token = localStorage.getItem("token")
            if (token) {
                getUser()
            }
        }
    }, [])

    useEffect(() => {
        if (res.status === 200 ||304) {
            setUser(res.data)
        }
    }, [res])

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export const PrivateRoute = WithToken(PrivateRouteComponent)


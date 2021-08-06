//WIP
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WithToken } from '../../HOCs/withToken';
import { useGetUser } from '../apis/useGetUser';
import { useEffect } from 'react';

export const PrivateRouteComponent = ({ component: Component, user, setUser, ...rest }) => {
    // const [res, getUser] = useGetUser()
    const token = localStorage.getItem("token")

    // useEffect(() => {
    //     if (!user) {
    //         const token = localStorage.getItem("token")
    //         if (token) {
    //             getUser()
    //             console.log("getting token")
    //             console.log(token)
    //         }
    //     }
    // }, [])

    // useEffect(() => {
    //     if (res.status === 200 ||304) {
    //         console.log(res.success)
    //     }
    // }, [res])

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export const PrivateRoute = WithToken(PrivateRouteComponent)


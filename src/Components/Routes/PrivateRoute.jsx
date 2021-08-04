import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useGetUser } from '../apis/useGetUser';

 export const PrivateRoute = ({component: Component, ...rest}) => {
     const token=localStorage.getItem("token")
     

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            token?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};


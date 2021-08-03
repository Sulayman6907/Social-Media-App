import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useGetUser } from '../apis/useGetUser';

 export const PrivateRoute = ({component: Component, ...rest}) => {
     const [isLogin,setislogin]= useState()
     const [res,getUser]=useGetUser()

     useEffect(() => {
        getUser()
      }, [])
    
      useEffect(() => {
        if (res.status===200) {
          setislogin(true)
        }else{
            setislogin(false)
        }
    
      }, [res])

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};


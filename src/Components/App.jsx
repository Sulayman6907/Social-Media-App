import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Signup,FeedPage,Login,Profile,Profiles,Dashboard,PostbyId } from './Pages'
import { PostProvider,UserProvider,CommentProvider } from '../Context';
import { NavBar } from './NavBar/NavBar.jsx';
import { PrivateRoute } from './Routes/PrivateRoute.jsx';
import { AddProfile,AddEducation,AddExperience } from './Profile forms';

export const App = () => {
  return (
    <Router>
      <UserProvider>
        <PostProvider>
          <CommentProvider>
          <NavBar />
          <Switch>
            <Route component ={Signup} path="/" exact />
            <Route component ={Login} path="/login" exact />
            <PrivateRoute component ={FeedPage} path="/feed" exact />
            <PrivateRoute component ={Profiles} path="/profiles" exact/> 
            <PrivateRoute component ={Dashboard} path="/dashboard" exact/> 
            <PrivateRoute component ={AddProfile} path="/add-profile" exact/>
            <PrivateRoute component ={AddEducation} path="/add-education" exact/>
            <PrivateRoute component ={AddExperience} path="/add-experience" exact/>
            <PrivateRoute component ={Profile} path={`/profile/:id`} />
            <PrivateRoute component ={PostbyId} path={`/post/:id`} />
          </Switch>
          </CommentProvider>
        </PostProvider>
      </UserProvider>
    </Router>
  );
};


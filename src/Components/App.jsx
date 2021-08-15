import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Signup } from './Pages/Signup.jsx'
import { FeedPage } from './Pages/FeedPage.jsx';
import { Login } from './Pages/Login.jsx';
import { PostProvider } from '../Context/PostContext.jsx';
import { UserProvider } from '../Context/userContext.jsx';
import { NavBar } from './Feed/NavBar.jsx';
import { PrivateRoute } from './Routes/PrivateRoute.jsx';
import { Profiles } from './ProfilePage/Profiles.jsx';
import { Profile } from './Pages/Profile.jsx';
import { Dashboard } from './Pages/Dashboard.jsx';
import { AddProfile } from './Profile forms/AddProfile.jsx';
import { AddEducation } from './Profile forms/AddEducation.jsx';
import { AddExperience } from './Profile forms/AddExperience.jsx';
import { PostbyId } from './Feed/PostbyId.jsx';

export const App = () => {
  return (
    <Router>
      <UserProvider>
        <PostProvider>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Signup />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <PrivateRoute component ={FeedPage} path="/feed" exact />
            <PrivateRoute component ={Profiles} path="/profiles" exact/> 
            <PrivateRoute component ={Dashboard} path="/dashboard" exact/> 
            <PrivateRoute component ={AddProfile} path="/add-profile" exact/>
            <PrivateRoute component ={AddEducation} path="/add-education" exact/>
            <PrivateRoute component ={AddExperience} path="/add-experience" exact/>
            <PrivateRoute component ={Profile} path={`/profile/:id`} />
            <PrivateRoute component ={PostbyId} path={`/post/:id`} />
          </Switch>
        </PostProvider>
      </UserProvider>
    </Router>
  );
};


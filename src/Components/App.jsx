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
            <Route component ={FeedPage} path="/feed" exact />
            <PrivateRoute component ={Profiles} path="/profiles" exact/> 
            <Route path="/login" exact>
              <Login />
            </Route>
            <PrivateRoute component ={Profile} path={`/profile/:id`} />
          </Switch>
        </PostProvider>
      </UserProvider>
    </Router>
  );
};


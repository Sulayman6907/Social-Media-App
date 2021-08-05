import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Signup } from './Pages/Signup.jsx'
import { FeedPage } from './Pages/FeedPage.jsx';
import { ProfilePage } from './Pages/ProfilePage.jsx';
import { ProfileForm } from './Pages/ProfileForm.jsx';
import { Login } from './Pages/Login.jsx';
import { PostProvider } from '../Context/PostContext.jsx';
import { UserProvider } from '../Context/userContext.jsx';
import { NavBar } from './Feed/NavBar.jsx';
import { PrivateRoute } from './Routes/PrivateRoute.jsx';
import { Profiles } from './ProfilePage/Profiles.jsx';
import { Profile } from './ProfilePage/Profile.jsx';

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
            <Route path="/feed" exact>
              <FeedPage />
            </Route>
            <PrivateRoute component ={Profiles} path="/profiles" exact/> 
            <Route path="/profileform" exact>
              <ProfileForm />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route exact path={`/profile/:id`} component={Profile} />
          </Switch>
        </PostProvider>
      </UserProvider>
    </Router>
  );
};


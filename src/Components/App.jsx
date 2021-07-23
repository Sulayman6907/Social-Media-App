import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Signup} from './Pages/Signup.jsx'
import { FeedPage } from './Pages/FeedPage.jsx';
import { ProfilePage } from './Pages/ProfilePage.jsx';
import { ProfileForm } from './Pages/ProfileForm.jsx';
import { Login } from './Pages/Login.jsx';
import { PostProvider } from '../Context/PostContext.jsx';

export const App = () => {
  return (
    <PostProvider>
    <Router>
      <Switch>
          <Route path="/" exact>
            <Signup />
          </Route>
          <Route path="/feed" exact> 
            <FeedPage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/profileform" exact>
            <ProfileForm />
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
        </Switch>
    </Router>
    </PostProvider>
  );
};


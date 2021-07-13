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

export const App = () => {
  return (
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
        </Switch>
    </Router>
  );
};


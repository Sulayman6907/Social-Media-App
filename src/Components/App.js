import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Signup} from './Pages/Signup'
import { FeedPage } from './Pages/FeedPage';
import { ProfilePage } from './Pages/ProfilePage';

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
        </Switch>
    </Router>
  );
};


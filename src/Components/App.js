import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './Pages/Signup'
import MainPage from './Pages/MainPage'


const App = () => {
  
  return (
    <Router>
      
        <Switch>
          <Route path="/" exact>
            <Signup />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          
        </Switch>
      
    </Router>
  );

}

export default App

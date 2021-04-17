import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
      <Route exact path='/'>
         <Dashboard/>
         </Route>
        <Route path='/signup'>
         <SignUp/>
         </Route>
         <Route path='/login'>
         <Login/>
         </Route>
      </Switch>
      {/* <Login/> */}
      </AuthProvider>
    </Router>      
     )
  }

export default App;

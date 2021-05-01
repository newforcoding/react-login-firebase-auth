import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import ForgetPassword from './Components/ForgetPassword';
import UpdateProfile from './Components/UpdateProfile';
import NotFound from './Components/NotFound';
import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard}/>
          <PrivateRoute exact path='/update-profile' component={UpdateProfile}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={Login}/>
          <Route path='/forgetpassword' component={ForgetPassword}/>
          <Route component={NotFound}/>
          </Switch>
      </AuthProvider>
    </Router> 
     )
  }

export default App;

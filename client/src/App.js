import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import SavedList from './components/pages/SavedList';
import PrivateRoute from './components/routing/PrivateRoute';
import LandingPage from './components/layout/LandingPage';
import './App.css';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import UserState from './context/users/UserState';
import Footer from './components/layout/Footer';
// import setAuthToken from './utils/setAuthToken';
// if(localStorage.token){
//   setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    <UserState>
    <AuthState>
    <ContactState>
    <AlertState>
    <Router>
    <Fragment>
    <Navbar/>
    <Footer/>
      <div className="container">
        <Alerts />
        <Switch>
          <PrivateRoute exact path='/' component={LandingPage}/>
          <Route exact path='/savedlist' component={SavedList}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </div>
    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
    </UserState>
  );
};

export default App;
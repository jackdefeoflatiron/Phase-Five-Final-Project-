
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
// import Header from './Header'







function App() {

//   componentDidMount() {
//   this.loginStatus()
// }\

const handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
const handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }


const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };


 
    return (


      <div>
      {/* <Header/>  */}
         <BrowserRouter>
          <Switch>
            <Route  path='/login'>
              <Login handleLogin={handleLogin} />
              </Route>
            <Route path='/signup'>
            <SignUp/>
            </Route>
            <Route path='/'>
              <Home/>
              </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }; 



export default App;

import React from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
const Home = (login) => {

  // console.log(login.user)
  return (
    <div>
    
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/logout'>Log Out</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      <Link to='/user'>Profile Page</Link>
    </div>
  );
};
export default Home;
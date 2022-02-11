import React from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
const Home = () => {
  return (
    <div>
    
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      <Link to='/user'>Profile Page</Link>
    </div>
  );
};
export default Home;
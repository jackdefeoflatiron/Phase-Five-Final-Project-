
import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header'







function App() {
const [logout, setLogout] = useState(false)
const [story, setAllStories] = useState([])
const [searchStories, setSearchStories] = useState("")

useEffect(() => {
  fetch("http://localhost:3001/story")
  .then(res => res.json())
  .then(data => setAllStories(data))
},[])


const handleLogin = (data) => {
    setLogout({
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

const displayStory = story.filter((story) => {
  if (searchStories === "") return true; 
  return story.title.toUpperCase().includes(searchStories.toUpperCase())
})


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
      <Header onchangeSearch={setSearchStories} searchStories={searchStories}/> 
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

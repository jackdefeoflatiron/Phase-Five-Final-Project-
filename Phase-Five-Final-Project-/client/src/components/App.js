
import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
// import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header'
import StoryListContainer from './StoryListContainer';
import User from './User'
import StoryCreator from './StoryCreator';
import StoryList from './StoryList';
import StoryDisplay from './StoryDisplay';
import Logout from './Logout';







function App({user}) {
const [logout, setLogout] = useState(false)
const [allStories, setAllStories] = useState([])
const [searchStories, setSearchStories] = useState("")
const [login, setLogin] = useState(false)

// console.log(login)
// console.log(user)



useEffect(()=> {
  fetch('/users-session')
  .then((res)=> res.json())
  .then((data) => {
  console.log(data)
  if (data.logged_in) {
          handleLogin(data)
          
        } else {
          // setErrors(data.errors)
        }
        // console.log(data)  
  })
  
},[])

// console.log(login)

useEffect(() => {
  fetch("/stories")
  .then(res => res.json())
  .then(data => setAllStories(data))
},[])

// useEffect(() => {
//   fetch("/styles")
//   .then(res => res.json())
//   .then(data => setStyle(data))
// },[])
// useEffect(() => {
//   fetch("/genres")
//   .then(res => res.json())
//   .then(data => setGenre(data))
// },[])

const handleLogin = (data) => {
    setLogin({
      isLoggedIn: true,
      user: data.user
    })
  } 
const handleLogout = () => {
    setLogin(
      false
    )
  }

const displayStory = allStories.filter((allStories) => {
  if (searchStories === "") return true; 
  return allStories.title.toUpperCase().includes(searchStories.toUpperCase())
})




const loginStatus = () => {
    fetch('http://localhost:3001/logged_in', 
   {withCredentials: true})    
   .then(response => response.json())
   .then(response => {
      if (response.data.logged_in) {
        handleLogin(response)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  function handleAddStories(addedStory) {
  setAllStories((allStories) => [...allStories, addedStory]);
}

function onDeleteStory(id) {
  const updatedStoriesArray = allStories.filter(
    (allStories) => allStories.id !== id
  );
  setAllStories(updatedStoriesArray);
}
 
    return (


      <div>
      <Header onchangeSearch={setSearchStories} searchStories={searchStories}/>  
          <BrowserRouter>
          <Switch>
            <Route  path='/login'>
              <Login handleLogin={handleLogin} />
              </Route>
            
            <Route path='/signup'>
            <SignUp handleLogin={handleLogin}/>
            </Route>
            <Route path='/logout'>
                <Logout handleLogout={handleLogout} setLogin={setLogin}/>
              </Route>
              <Route path='/user'>
                <User  user={login.user}  allStories={allStories} />
              </Route>
              <Route path='/storycreator'>
              <StoryCreator onAdd={handleAddStories}  allStories={allStories}  login={login}/>
              </Route>
              <Route path='/story/:id'>
              <StoryDisplay onDeleteStory={onDeleteStory} allStories={allStories} />
              </Route>
            <Route path='/'>
              <Home/>
              </Route>
          </Switch>
          <StoryListContainer 
        allStories={allStories} onDeleteStory={onDeleteStory}
        />
        </BrowserRouter>
        
      </div>
    );
  }; 



export default App;

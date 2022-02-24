
import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
// import axios from 'axios'
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom'
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
import UserEditor from './UserEditor'
import StoryEditor from './StoryEditor';
import UserViewer from './UserViewer';







function App({user}) {
const [logout, setLogout] = useState(false)
const [allStories, setAllStories] = useState([])
const [searchStories, setSearchStories] = useState("")
const [login, setLogin] = useState(false)
const [isDeleted, setIsDelete] = useState(false)

// console.log(login)
// console.log(user)
let history = useHistory()


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
  .then(res => {
    console.log(res)
    return res
  })
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
// const handleLogout = () => {
 
//    setLogin(false)
    
//   }

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
        setLogin(false)
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  function handleAddStories(addedStory) {
  setAllStories((allStories) => [...allStories, addedStory]);
  return addedStory
}

function onDeleteStory(id) {
  console.log(id)
  console.log(allStories)
  const updatedStoriesArray = allStories.filter(
    (allStories) => allStories.id !== id
  );
  console.log(updatedStoriesArray)
  setAllStories(updatedStoriesArray);

}
    return (


      <div>
      <Header onChangeSearch={setSearchStories} searchStories={searchStories}/>  
          <BrowserRouter>
          <Switch>
            <Route  path='/login'>
              <Login handleLogin={handleLogin} />
            </Route>
            
            <Route path='/signup'>
              <SignUp handleLogin={handleLogin}/>
            </Route>
            
            <Route path='/logout'>
              <Logout setLogin={setLogin} />
            </Route>
            
            <Route path='/user'>
              <User  handleLogin={handleLogin} user={login.user}  allStories={allStories} />
            </Route>
            
            <Route path='/storycreator'>
              <StoryCreator onAdd={handleAddStories}  allStories={allStories}  login={login}/>
            </Route>
            
            <Route path='/story/:id'>
              <StoryDisplay  onDeleteStory={onDeleteStory} allStories={allStories} />
            </Route>
            
            <Route path='/usereditor'>
              <UserEditor login={login} user={login.user}/>
            </Route>

            <Route path='/storyeditor'>
              <StoryEditor  allStories={allStories} />
            </Route>

            <Route path='userviewer'>
            <UserViewer user={user} allStories={allStories}/>
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

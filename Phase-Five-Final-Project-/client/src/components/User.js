import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

function User({user, genre, style, login}) {

function handleDeleteUser() {
console.log(user.id)
let id = user.id
  fetch(`users/${id}`, {
    method: 'DELETE'
  })
  .then((res) => res.json())
}


 console.log(user)
    return(
        <div>
            <Link to='/home'> Main Page</Link>
            <Link to='/user'></Link>
           <h1>{user.username}</h1>
           <img src={user.profile_picture}></img>
           <p>{user.bio}</p>
           <p>{user.email_address}</p>
           <button placeholder="submit" type="submit">
            <Link to='/storycreator'>Create New Story</Link>
          </button>
          
          <button onClick={handleDeleteUser}> 
          <Link to='/home'>Delete User</Link> 
          </button>


        </div>
    )
}

export default User
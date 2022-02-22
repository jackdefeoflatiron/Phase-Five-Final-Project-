import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
import UserEditor from './UserEditor'

function User({user, genre, style, login}) {

function handleDeleteUser() {
  
console.log(user.id)
let id = user.id
  fetch(`users/${id}`, {
    method: 'DELETE'
  })
  .then((res) => res.json())
}

// function handleEditUser() {

//   let id = user.id

//   let editedUser = {
//     username: user.username,
//     profile_picture:  user.profile_picture,
//     bio: user.bio,
//     email_address: user.email_address,
//     password: user.password,
//     password_conformation: user.password_conformation
//   }
//   fetch(`users/${id}`, {
//     method: "PATCH",
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify(editedUser)
//   })
// }


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
          <button type='submit'>
          <Link to='/usereditor'>Edit User</Link>
          </button> 
          <button type='submit' onClick={handleDeleteUser}> 
          <Link to='/home'>Delete User</Link> 
          </button>


        </div>
    )
}

export default User
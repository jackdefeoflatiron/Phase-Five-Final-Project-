import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

function Signup({handleLogin}) {
const [errors, setErrors] = useState([])
const history = useHistory()
const [username, setUsername] = useState("")
const [email_address, setEmail_address] = useState("")
const [password, setPassword] =useState("")
const [password_confirmation, setPassword_conformation] =useState("")
const [bio, setBio] =useState("")
const [profile_picture, setProfile_picture] =useState("")

const handleSubmit = (event) => {
    event.preventDefault()
    const {username, email_address, password, password_confirmation, bio, profile_picture} 
    let user = {
      username: username,
      email_address: email_address,
      password: password,
      password_confirmation: password_confirmation,
      bio: bio,
      profile_picture: profile_picture
    }
fetch('http://localhost:3000/users', {
  method : 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(user),
}

)
  .then(response => response.json())
  .then(response => {
      if (response.data.status === 'created') {
          handleLogin(response.data)
        redirect()
      } else {
        setErrors(
          response.data.errors
        )
      }
    })
    .catch(error => console.log('api errors:', error))
  };
const redirect = () => {
    history.push('/')
  }

const handleErrors = () => {
    return (
      <div>
        <ul>{errors.map((error) => {
          return <li>key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  };




    










return (
      <div>
        <h1>Sign Up</h1>        
<form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email_address}
            onChange={(e) => setEmail_address(e.target.value)}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={(e) => setPassword_conformation(e.target.value)}
          />

          <input
            placeholder="Bio"
            type="Bio"
            name="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <input
            placeholder="ProfilePicture"
            type="ProfilePicture"
            name="ProfilePicture"
            value={profile_picture}
            onChange={(e) => setProfile_picture(e.target.value)}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form>
      </div>
    );
}
export default Signup;
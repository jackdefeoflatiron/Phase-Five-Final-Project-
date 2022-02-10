import React, { Component } from 'react';
import axios from 'axios'

function Signup({handleLogin}) {
const [errors, setErrors] = useState([])
const handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
const handleSubmit = (event) => {
    event.preventDefault()
    const {username, email_address, password, password_confirmation, bio, profile} = this.state
    let user = {
      username: username,
      email_address: email_address,
      password: password,
      password_confirmation: password_confirmation
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
    props.history.push('/')
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




    const {username, email, password, password_confirmation, bio, profile_picture} = this.state










return (
      <div>
        <h1>Sign Up</h1>        
<form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <input
            placeholder="Bio"
            type="Bio"
            name="Bio"
            value={bio}
            onChange={this.handleChange}
          />

          <input
            placeholder="ProfilePicture"
            type="ProfilePicture"
            name="ProfilePicture"
            value={profile_picture}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form>
      </div>
    );
}
export default Signup;
import React, { Component } from 'react';
import axios from 'axios'

function Signup() {

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
axios.post('http://localhost:3000/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
const redirect = () => {
    this.props.history.push('/')
  }

const handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
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
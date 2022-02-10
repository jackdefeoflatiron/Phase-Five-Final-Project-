import React, { Component, useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

function Login({handleLogin}) {
const [username, setUsername] = useState("")
const [email_address, setEmail_address] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState([])
const history = useHistory()




const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: username,
      email_address: email_address,
      password: password
    }

// axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
//     .then(response => {
//       if (response.data.logged_in) {
//         handleLogin(response.data)
//         redirect()
//       } else {
//         setState({
//           errors: response.data.errors
//         })
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   };

fetch('/user-login' ,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
})
.then((res) =>res.json())
.then((data) => {
  console.log(data)
if (data.logged_in) {
        handleLogin(data)
        redirect()
      } else {
        setErrors(data.errors)
      }
      console.log(data)  
})
}
const redirect = () => {
    history.push('/')
  }

const handleErrors = () => {
    return (
      <div>
        <ul>
        {errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };


return (
      <div>
        <h1>Log In</h1>        
<form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email_address}
            onChange={e=>setEmail_address(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />         
<button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
      </div>
    );
}


export default Login;
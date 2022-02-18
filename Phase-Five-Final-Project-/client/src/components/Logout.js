import React from 'react'
import {Link, useHistory} from 'react-router-dom'



function Logout ({setLogin, login }) {

let history = useHistory();

 const handleLogout = () => {
   setLogin(false)
 history.push("/home")
  }
      return (
          <div>
            <button placeholder="Logout" type="click" onClick={handleLogout}>
                  Logout
            </button>
            <br></br>
            <Link to='/home'>Main Page</Link>

          </div>
      )
}

export default Logout
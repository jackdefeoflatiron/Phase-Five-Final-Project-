import React from 'react'
import {Link, useHistory} from 'react-router-dom'



function logout ({handleLogout, setLogin, login }) {
    // const history = useHistory()


    // const redirect = () => {
    //     history.push('/')
    //   }
console.log(handleLogout, 'testing')
// console.log(login)

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

export default logout
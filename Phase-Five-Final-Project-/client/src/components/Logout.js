import React from 'react'
import {Link, useHistory} from 'react-router-dom'



function logout ({handleLogout}) {
    const history = useHistory()


    // const redirect = () => {
    //     history.push('/')
    //   }


      return (
          <div>
            <button placeholder="click" type="click" onClick={handleLogout}>
                  Logout
            </button>
            <br></br>
            <Link to='/home'>Main Page</Link>

          </div>
      )
}

export default logout
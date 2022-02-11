import React from 'react'


function User({user}) {


    return(
        <div>
            {/* <Link to='/user'></Link> */}
           <h1>{user.username}</h1>
           <p>{user.profile_picture}</p>
           <p>{user.bio}</p>
           <p>{user.email_address}</p>
           <button placeholder="submit" type="submit">
            Create New Story
          </button>


        </div>
    )
}

export default User
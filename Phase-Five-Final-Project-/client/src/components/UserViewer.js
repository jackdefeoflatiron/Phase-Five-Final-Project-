import react, {useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'
import UserStoryList from './UserStoryList'

function UserViewer({user, allStories, users }) {
    const params = useParams()
    let history = useHistory()
console.log(params)
    const displayUser = users.users.find(oneUser => (oneUser.id == params.id))
console.log(displayUser)
console.log(users)
const displayUserStories = allStories.filter(usersStories => usersStories.user_id == params.id )
console.log(allStories)
console.log(displayUserStories)
return(
    <div>
        <Link to='/home'>Main Page</Link>
        <h1>{displayUser.username}</h1>
        <img src={displayUser.profile_picture}></img>
           <p>{displayUser.bio}</p>
           <p>{displayUser.email_address}</p>
           <br></br>
           {displayUserStories.map((displayUserStories)=>
            <UserStoryList
            user={user}
            users={users}
            key={allStories.id}
            allStories={allStories}
            displayUser={displayUser}
            displayUserStories={displayUserStories}
            />  )}
           
    </div>
    
)
}

export default UserViewer
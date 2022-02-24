import react, {useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'
import UserStoryList from './UserStoryList'

function UserViewer({user, allStories}) {
    const params = useParams()
    let history = useHistory()

    const displayUser = user.find(oneUser => (oneUser.id == params.id))
console.log(displayUser.id)
console.log(user)
return(
    <div>
        Hello
        <h1>{user.username}</h1>
        <img src={user.profile_picture}></img>
           <p>{user.bio}</p>
           <p>{user.email_address}</p>
           <br>
           {allStories.map((allStories)=>
            <UserStoryList
            user={user}
            key={allStories.id}
            allStories={allStories}
            />  )}
           </br>
    </div>
    
)
}

export default UserViewer
import React, {useState, useEffect} from 'react'
import StoryDisplayer from './StoryDisplay'
import {BrowserRouter, Switch, Route,  Link,  useParams, useHistory} from 'react-router-dom'


function StoryPreview({allStories, user, users, login}) {
    // const [users, setUsers] = useState([])
console.log(users)
    // useEffect(()=> {
    //     fetch('/users')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setUsers(data)
    //     })
    // }, []) 
    


const history = useHistory();

// const id = allStories.user_id


console.log(allStories)
    return(
        <div>

        <l1>
            <Link allStories={allStories} to={`/story/${allStories.id}`}> {allStories.story_name}</Link>
            <br/>
            <Link  users={users} allStories={allStories} to={`/userviewer/${allStories.user_id}`}>{allStories.author}</Link>
            <p>{allStories.age_group}</p>
            <p>{allStories.genre}</p>
            <p>{allStories.style}</p>
        </l1>
    </div>
    )
}

export default StoryPreview 
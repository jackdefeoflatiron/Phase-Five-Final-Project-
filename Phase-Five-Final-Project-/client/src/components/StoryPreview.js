import React from 'react'
import StoryDisplayer from './StoryDisplay'
import {BrowserRouter, Switch, Route,  Link,  useParams, useHistory} from 'react-router-dom'


function StoryPreview({allStories, user, login}) {

const id = allStories.user_id
const params = useParams();
const history = useHistory();
console.log(allStories)
    return(
        <div>

        <l1>
            <Link allStories={allStories} to={`/story/${allStories.id}`}> {allStories.story_name}</Link>
            <br/>
            <Link user={user} allStories={allStories} to={`/userviewer/${user}`}>{allStories.author}</Link>
            <p>{allStories.age_group}</p>
            <p>{allStories.genre}</p>
            <p>{allStories.style}</p>
        </l1>
    </div>
    )
}

export default StoryPreview 
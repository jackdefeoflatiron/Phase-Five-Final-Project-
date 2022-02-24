import react, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'

function UserStoryList({user, allStories}) {
    



    return (
        <div>

        <l1>
            <Link allStories={allStories} to={`/story/${allStories.id}`}> {allStories.story_name}</Link>
            <br/>
             <p user={user} allStories={allStories} to={`/userviewer/${allStories.user_id}`}>{allStories.author}</p>
            <p>{allStories.age_group}</p>
            <p>{allStories.genre}</p>
            <p>{allStories.style}</p>
        </l1>
    </div>
    )
}

export default UserStoryList
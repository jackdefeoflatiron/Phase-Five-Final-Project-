import react, {useState} from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'

function UserStoryList({ allStories, displayUser}) {
console.log(allStories)
const params = useParams()
const displayUserStories = allStories.find(usersStories => usersStories.user_id == params.id )


    return (
        <div>

        <l1>
            <Link allStories={allStories} to={`/story/${allStories.id}`}> {displayUserStories.story_name}</Link>
            <br/>
             <p allStories={allStories} to={`/userviewer/${allStories.user_id}`}>{displayUserStories.author}</p>
            <p>{displayUserStories.age_group}</p>
            <p>{displayUserStories.genre}</p>
            <p>{displayUserStories.style}</p>
        </l1>
    </div>
    )
}

export default UserStoryList
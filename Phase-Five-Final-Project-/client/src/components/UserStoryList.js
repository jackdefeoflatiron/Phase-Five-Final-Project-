import react, {useState} from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'

function UserStoryList({ allStories, users}) {
console.log(allStories)
const params = useParams()
const displayUserStories = allStories.filter(usersStories => usersStories.user_id == params.id )
const displayUser = users.users.find(oneUser => (oneUser.id == params.id))
console.log(displayUser)
let displayUserStory_story_name  = displayUserStories.story_name
let displayUserStory_author = displayUserStories.author
let displayUserStory_age_group = displayUserStories.age_group
let displayUserStory_genre = displayUserStories.genre
let displayUserStory_style = displayUserStories.style
    return (
        <div>

        <l1>
            <Link allStories={allStories} to={`/story/${allStories.id}`}> {displayUserStory_story_name}</Link>
            <br/>
             <p allStories={allStories} to={`/userviewer/${allStories.user_id}`}>{displayUserStory_author}</p>
            <p>{displayUserStory_age_group}</p>
            <p>{displayUserStory_genre}</p>
            <p>{displayUserStory_style}</p>
        </l1>
    </div>
    )
}

export default UserStoryList
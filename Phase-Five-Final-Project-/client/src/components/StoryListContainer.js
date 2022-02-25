import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoryList from './StoryList'


function StoryListContainer({allStories, user, users, login, onDeleteStory}) {
    console.log(allStories)
    console.log(users)
    

return(
    <div>
        <header as='h1'style={{ fontWeight: "lighter" }}>
            Newest Stories{" "}
            <StoryList users={users} user={user} onDeleteStory={onDeleteStory} allStories={allStories}></StoryList>
        </header>

    </div>
)
}
export default StoryListContainer
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoryList from './StoryList'


function StoryListContainer({allStories, user, login, onDeleteStory}) {
    console.log(allStories)

    

return(
    <div>
        <header as='h1'style={{ fontWeight: "lighter" }}>
            Newest Stories{" "}
            <StoryList user={user} onDeleteStory={onDeleteStory} allStories={allStories}></StoryList>
        </header>

    </div>
)
}
export default StoryListContainer
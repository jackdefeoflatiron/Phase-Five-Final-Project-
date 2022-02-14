import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoryList from './StoryList'


function StoryListContainer({story, }) {
    console.log(story)
return(
    <div>
        <header as='h1'style={{ fontWeight: "lighter" }}>
            Newest Stories{" "}
            <StoryList story={story}></StoryList>
        </header>

    </div>
)
}
export default StoryListContainer
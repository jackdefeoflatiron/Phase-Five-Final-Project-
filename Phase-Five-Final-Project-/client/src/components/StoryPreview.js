import React from 'react'
import StoryDisplayer from './StoryDisplay'
import {BrowserRouter, Switch, Route,  Link } from 'react-router-dom'


function StoryPreview({allStories, user, login}) {

console.log(allStories)
    return(
        <div>

        <l1>
            <Link allStories={allStories} to={`/story/${allStories.id}`}> {allStories.story_name}</Link>
            <p>{allStories.author}</p>
            <p>{allStories.age_group}</p>
            <p>{allStories.genre}</p>
            <p>{allStories.style}</p>
        </l1>
    </div>
    )
}

export default StoryPreview 
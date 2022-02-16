import React from 'react'
import StoryDisplayer from './StoryDisplay'
import {BrowserRouter, Switch, Route,  Link } from 'react-router-dom'


function StoryPreview({story, user, login}) {

// console.log(story)
    return(
        <div>

        <l1>
            <Link story={story} to={`/story/${story.id}`}> {story.story_name}</Link>
            <p>{story.author}</p>
            <p>{story.age_group}</p>
            <p>{story.genre}</p>
            <p>{story.style}</p>
        </l1>
    </div>
    )
}

export default StoryPreview 
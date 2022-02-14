import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoryPreview from './StoryPreview'


function StoryList({story}) {
console.log(story)
    return(
        <div> 
{/* <BrowserRouter>
    <Switch>
        <Route path='/storydisplay'> */}
        {story.map((story)=>
            <StoryPreview
            key={story.id}
            story={story}
            />  )}
        {/* </Route>
    </Switch>
</BrowserRouter> */}
        </div>
    )
        
}

export default StoryList
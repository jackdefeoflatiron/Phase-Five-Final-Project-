import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoryPreview from './StoryPreview'


function StoryList({allStories, user, login,  onDeleteStory}) {
console.log(allStories)
    return(
        <div> 
{/* <BrowserRouter>
    <Switch>
        <Route path='/storydisplay'> */}
        {allStories.map((allStories)=>
            <StoryPreview
            onDeleteStory={onDeleteStory}
            key={allStories.id}
            allStories={allStories}
            />  )}
        {/* </Route>
    </Switch>
</BrowserRouter> */}
        </div>
    )
        
}

export default StoryList
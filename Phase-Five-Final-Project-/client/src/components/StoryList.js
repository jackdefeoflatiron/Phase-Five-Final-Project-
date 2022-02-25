import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoryPreview from './StoryPreview'


function StoryList({allStories, user, users, login,  onDeleteStory}) {
    console.log(users)
    console.log(onDeleteStory)
    return(
        <div> 
{/* <BrowserRouter>
    <Switch>
        <Route path='/storydisplay'> */}
        {allStories.map((allStories)=>
            <StoryPreview
            users={users}
            user={user}
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
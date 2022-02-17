import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom'

function StoryDisplay({login,user, allStories, onDeleteStory}) {

const params = useParams()


const displayStory = allStories.find(oneStory => (oneStory.id == params.id))
console.log('displayStory id',displayStory.id)
console.log(displayStory, 'displayStory')

function handleDelete(displayStory) {
    const id = displayStory.id
   

// console.log("its the id", id)
    fetch(`/stories/${id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
        onDeleteStory(id)
    })
}

return(
    <div>
        <Link to='/home'>Main Page</Link>
        <h1>{displayStory.story_name}</h1>
            <p>{displayStory.author}</p>
            <p>{displayStory.age_group}</p>
            <p>{displayStory?.genres[0]?.genre}</p>
            <p>{displayStory?.styles[0]?.style}</p>
            <br></br>
            <div>
               <button onClick={handleDelete}>Delete</button> 
            </div>
            <br></br>
            <p>{displayStory?.chapters[0]?.title}</p>
            <p>{displayStory?.chapters[0]?.chapter_number}</p>
            <p>{displayStory?.chapters[0]?.body}</p>
    </div>

)
}
export default StoryDisplay
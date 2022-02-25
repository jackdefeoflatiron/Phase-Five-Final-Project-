import React, {useEffect, useState} from 'react'


import {BrowserRouter, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'

function StoryDisplay({login,user, allStories, onDeleteStory, setIsDelete,isDelete, isLoggedIn}) {

const params = useParams()

let history = useHistory()


const displayStory = allStories.find(oneStory => (oneStory.id == params.id))
console.log(displayStory.id)
console.log(allStories)


async function handleDelete() {
    const displayStory = allStories.find(oneStory => (oneStory.id == params.id))
    const id = displayStory.id
    console.log(id)

console.log("its the id", id)
    fetch(`/stories/${id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
        onDeleteStory(id)
        setIsDelete(!isDelete)
    })
    .then(history.push("/home"))
    
}

// const loggedIn = login.user.id === displayStory.user.id 

return(
    <div>
        <Link to='/home'>Main Page</Link>
        <h1>{displayStory?.story_name}</h1>
            <p>{displayStory?.author}</p>
            <p>{displayStory?.age_group}</p>
            <p>{displayStory?.genres[0]?.genre}</p>
            <p>{displayStory?.styles[0]?.style}</p>
            <br></br>
            <div >
               <button onClick={handleDelete}>Delete</button> 
               <button>
                <Link to={`/storyeditor/${displayStory.id}`}>Edit Story</Link>
               </button>
            </div>
            <br></br>
            <p>{displayStory?.chapters[0]?.title}</p>
            <p>{displayStory?.chapters[0]?.chapter_number}</p>
            <p>{displayStory?.chapters[0]?.body}</p>
    </div>

)
}
export default StoryDisplay
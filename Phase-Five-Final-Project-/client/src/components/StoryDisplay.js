import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom'

function StoryDisplay({login,user, story}) {
// const [selectedStory, setSelectedStory] = useState({})
// const [chapter, setChapter] = useState([])

// useEffect(() => {
// fetch(`./chapters/${story.id}`)
// .then((res)=> res.json())
// .then((data) => setChapter(data))
// }, [])
console.log("story:", story)
const params = useParams()

console.log( params)

// const diplayStory = story.filter(oneStory => (oneStory.id === params.id))
// setSelectedStory(diplayStory)
// console.log("Check single story: " , selectedStory)

return(
    <div>
        <Link to='/home'>Main Page</Link>
        <h1>{story[params.id].story_name}</h1>
            <p>{story[params.id].author}</p>
            <p>{story[params.id].age_group}</p>
            <p>{story[params.id].genre}</p>
            <p>{story[params.id].style}</p>
            <br></br>
            <p>{story[params.id].title}</p>
            <p>{story[params.id].chapter_number}</p>
            <p>{story[params.id].body}</p>
    </div>
)
}
export default StoryDisplay
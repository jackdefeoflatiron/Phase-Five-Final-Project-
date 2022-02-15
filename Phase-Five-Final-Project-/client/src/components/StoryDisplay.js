import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom'

function StoryDisplay({login,user, story}) {
const [selectedStory, setSelectedStory] = useState([])
// const [chapter, setChapter] = useState([])

// useEffect(() => {
// fetch(`./chapters/${story.id}`)
// .then((res)=> res.json())
// .then((data) => setChapter(data))
// }, [])
console.log(story)
const params = useParams()

console.log(params)

const selectedStory = story.filter(story => {
if (story.id === params.id)
return setSelectedStory(story)
})

console.log(selectedStory.author)

return(
    <div>
        <Link to='/home'>Main Page</Link>
        <h1>{selectedStory?.story_name}</h1>
            <p>{selectedStory?.author}</p>
            <p>{selectedStory?.age_group}</p>
            <p>{selectedStory?.genre}</p>
            <p>{selectedStory?.style}</p>
            <br></br>
            <p>{selectedStory?.title}</p>
            <p>{selectedStory?.chapter_number}</p>
            <p>{selectedStory?.body}</p>
    </div>
)
}
export default StoryDisplay
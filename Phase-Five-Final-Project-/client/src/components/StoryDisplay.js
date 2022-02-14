import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom'

function StoryDisplay({login,user, story}) {

// const [chapter, setChapter] = useState([])

// useEffect(() => {
// fetch(`./chapters/${story.id}`)
// .then((res)=> res.json())
// .then((data) => setChapter(data))
// }, [])
// // console.log(story)
const params = useParams()

console.log(params)

const displaySelectedStory = story.filter((story) => {
    
})

}

return(
    <div>
        <Link to='/home'>Main Page</Link>
        <h1>{params?.story_name}</h1>
            <p>{params?.author}</p>
            <p>{story?.age_group}</p>
            <p>{story?.genre}</p>
            <p>{story?.style}</p>
            <br></br>
            <p>{story?.title}</p>
            <p>{story?.chapter_number}</p>
            <p>{story?.body}</p>
    </div>
)
}
export default StoryDisplay
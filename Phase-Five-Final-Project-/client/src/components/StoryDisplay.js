import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom'

function StoryDisplay({login,user, story}) {
    // const [id, setId] = useState(0)
// const [selectedStory, setSelectedStory] = useState({})
// const [chapter, setChapter] = useState([])

// useEffect(() => {
// fetch(`./chapters/${story.id}`)
// .then((res)=> res.json())
// .then((data) => setChapter(data))
// }, [])
// console.log('testing', story)
const params = useParams()
// console.log(params)
// console.log(story)
// console.log(id)
// console.log( params)
// console.log(story[params.id].title)

const displayStory = story.find(oneStory => (oneStory.id == params.id))
console.log('displayStory',displayStory.id)
const id = displayStory.id
// setId(displayStory.id)
// setSelectedStory(diplayStory)
// console.log("Check single story: " , selectedStory)
// console.log(login.user)
// console.log(logged_in)
// const chapterArray = displayStory.chapters.map(chapter => {
// console.log('testing2',chapter)
//     // return (
//     // <p>{chapter.title}</p>
//     // <p>{chapter.chapter_number}</p>,
//     // <p>{chapter.body}</p>,
//     // )
// })
function handleDelete() {
    debugger
    fetch(`/stories/${id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
//     .then(() => {
//         onDeleteStory(story.id)
//     })
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
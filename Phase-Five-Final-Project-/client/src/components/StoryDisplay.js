import React, {useEffect, useState} from 'react'


import {BrowserRouter, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'

function StoryDisplay({login,user, allStories, onDeleteStory, setIsDelete,isDelete}) {

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
    response = await fetch(Promise.then(history.push("/home")))
}

// Baseline edit function
// function handleEdit(displayStory) {
//     const id = displayStory.id
//     const [displayStoryStory_name, setDisplayStoryStory_name] =useState(displayStory.story_name)
//     const [displayStoryAuthor, setDisplayStoryAuthor] = useState(displayStory.author)
//     const [displayStoryAge_group, setDisplayStoryAge_group] = useState(displayStory.age_group)
//     const [displayStoryGenres, setDisplayStoryGenres] = useState(displayStory.genres)
//     const [displayStoryStyles, setDisplayStoryStyles] = useState(displayStory.styles)
//     const [displayStoryTitle, setDisplayStoryTitle] = useState(displayStory.title)
//     const [displayStoryChapter_number, setDisplayStoryChapter_number] =useState(displayStory.chapter_number)
//     const [displayStoryBody, setDisplayStoryBody] = useState(displayStory.body)


//   const saveChanges = (e) => {
//     e.preventDefault();
//     let editedStory = {
//       userId: displayStory.userId,
//       story_name: displayStoryStory_name,
//       author: displayStoryAuthor,
//       age_group: displayStoryAge_group,
//       genres: displayStoryGenres,
//       styles: displayStoryStyles,
//       title: displayStoryTitle,
//       chapter_number: displayStoryChapter_number,
//       body: displayStoryBody
//     }
//     fetch(`/stories/${id}`, {
//         method: "PATCH",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(editedStory),
//       })
//       displayStory.story_name = displayStoryStory_name
//       displayStory.author = displayStoryAuthor
//       displayStory.age_group = displayStoryAge_group
//       displayStory.genres = displayStoryGenres
//       displayStory.styles = displayStoryStyles
//       displayStory.title = displayStoryTitle
//       displayStory.chapter_number = displayStoryChapter_number
//       displayStory.body = displayStoryBody
//       onCancel(false)
//     }
//     const handleNoteCancel = () => {
//       setDisplayStoryStory_name(displayStory.story_name)
//       setDisplayStoryAuthor(displayStory.author)
//       setDisplayStoryAge_group(displayStory.age_group)
//       setDisplayStoryGenres(displayStory.genres)
//       setDisplayStoryStyles(displayStory.styles)
//       setDisplayStoryTitle(displayStory.styles)
//       setDisplayStoryChapter_number(displayStory.chapter_number)
//       setDisplayStoryBody(displayStory.body)
//       onCancel(false)
//     }
// }

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
               {/* <button onClick={handleEdit}>Edit</button> */}
            </div>
            <br></br>
            <p>{displayStory?.chapters[0]?.title}</p>
            <p>{displayStory?.chapters[0]?.chapter_number}</p>
            <p>{displayStory?.chapters[0]?.body}</p>
    </div>

)
}
export default StoryDisplay
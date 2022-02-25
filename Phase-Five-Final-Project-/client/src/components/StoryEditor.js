import React, { useState, useEffect} from "react"
import {BrowserRouter, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'



function StoryEditor({allStories}) {
    // const [users, setUsers] = useState([])

    // useEffect(()=> {
    //     fetch('/users')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setUsers(data)
    //     })
    // }, []) 
    const params = useParams();
    const history = useHistory();
    const displayStory = allStories.filter(oneStory => (oneStory.id == params.id))
    console.log(displayStory)
    // const displayStory = {
    //     story_name: story_name,
    //     author: login.user.username,
    //     user_id: login.user.id,
    //     age_group: age_group,
    //     genre: genre,
    //     style: style,
    //     title: title,
    //     chapter_number: chapter_number,
    //     body: body,
    // }
    const [displayStoryStory_name, setDisplayStoryStory_name] =useState(displayStory.story_name)
    // const [displayStoryAuthor, setDisplayStoryAuthor] = useState(displayStory.author)
    const [displayStoryAge_group, setDisplayStoryAge_group] = useState(displayStory.age_group)
    const [displayStoryGenres, setDisplayStoryGenres] =  useState(displayStory.genres)
    const [displayStoryChapter_number, setDisplayStoryChapter_number] =useState(displayStory.chapter_number)
    const [displayStoryBody, setDisplayStoryBody] = useState(displayStory.body)
    const [displayStoryStyles, setDisplayStoryStyles] = useState(displayStory.styles)
    const [displayStoryTitle, setDisplayStoryTitle] = useState(displayStory.title)

    
    
    
// Baseline edit function
// function handleEdit(displayStory) {
//     const id = displayStory.id
    // const [displayStoryStory_name, setDisplayStoryStory_name] =useState(displayStory.story_name)
    // const [displayStoryAuthor, setDisplayStoryAuthor] = useState(displayStory.author)
    // const [displayStoryAge_group, setDisplayStoryAge_group] = useState(displayStory.age_group)
    // const [displayStoryGenres, setDisplayStoryGenres] =  useState(displayStory.title)
    // const [displayStoryChapter_number, setDisplayStoryChapter_number] =useState(displayStory.chapter_number)
    // const [displayStoryBody, setDisplayStoryBody] = useState(displayStory.body)
    // const [displayStoryStyles, setDisplayStoryStyles] = useState(displayStory.styles)
    // const [displayStoryTitle, setDisplayStoryTitle] = useState(displayStory.title)

  const saveChanges = (e) => {
    e.preventDefault();
    let editedStory = {
      userId: displayStory.userId,
      story_name: displayStoryStory_name,
    //   author: displayStoryAuthor,
      age_group: displayStoryAge_group,
      genres: displayStoryGenres,
      styles: displayStoryStyles,
      title: displayStoryTitle,
      chapter_number: displayStoryChapter_number,
      body: displayStoryBody
    }
    // const id = displayStory.id
    fetch(`/story/${displayStory.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(editedStory),
      })
      displayStoryStory_name = displayStory.story_name
    //   displayStoryAuthor = displayStory.author
      displayStoryAge_group = displayStory.age_group
      displayStoryGenres = displayStory.genres
      displayStoryStyles = displayStory.styles
      displayStoryTitle = displayStory.title
      displayStoryChapter_number = displayStory.chapter_number
      displayStoryBody = displayStory.body
    //   onCancel(false)
    }
    // const handleCancel = () => {
    //   setDisplayStoryStory_name(displayStory.story_name)
    //   setDisplayStoryAuthor(displayStory.author)
    //   setDisplayStoryAge_group(displayStory.age_group)
    //   setDisplayStoryGenres(displayStory.genres)
    //   setDisplayStoryStyles(displayStory.styles)
    //   setDisplayStoryTitle(displayStory.styles)
    //   setDisplayStoryChapter_number(displayStory.chapter_number)
    //   setDisplayStoryBody(displayStory.body)
    //   onCancel(false)
    // }
// }



    return (
        <div> Hello
        <form onSubmit={saveChanges}>
        <input
          placeholder="story_name"
          type="text"
          name="story_name"
          value={displayStory.story_name}
          onChange={(e) => setDisplayStoryStory_name (e.target.value)}
        />
        <input 
          placeholder="age_group"
          type="text"
          name="age_group"
          value={displayStory.age_group}
          onChange={(e) => setDisplayStoryAge_group(e.target.value)}
        />  
      <input
          placeholder="genre"
          type="text"
          name="genre"
          value={displayStory.genres}
          onChange={(e) => setDisplayStoryGenres(e.target.value)}
      />
        <input
          placeholder="style"
          type="text"
          name="style"
          value={displayStory.styles}
          onChange={(e) => setDisplayStoryStyles(e.target.value)}
        />
           
        <input
          placeholder="chapter_title"
          type="text"
          name="title"
          value={displayStory.title}
          onChange={(e) => setDisplayStoryTitle(e.target.value)}
        />

        <input
          placeholder="chapter_number"
          type="integer"
          name="chapter_number"
          value={displayStory.chapter_number}
          onChange={(e) => setDisplayStoryChapter_number(e.target.value)}
        />

        <input
          placeholder="body"
          type="text"
          name="body"
          value={displayStory.body}
          onChange={(e) => setDisplayStoryBody(e.target.value)}
        />
      
        
      <button placeholder="submit" type="submit">
          <Link to={`/story/${displayStory.id}`}>Save Edits </Link>
        </button>

        <button placeholder="cancel" type='submit' >
            <Link to='/home'>  Cancel Edits</Link>
        </button>
    
      
      
      </form>
      </div>
    )
}


export default StoryEditor
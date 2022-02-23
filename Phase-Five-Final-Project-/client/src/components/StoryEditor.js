import React, { useState } from "react"
import {BrowserRouter, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'



function StoryEditor({allStories, login, user, displayStory}) {

    
    const [displayStoryStory_name, setDisplayStoryStory_name] =useState("")
    const [displayStoryAuthor, setDisplayStoryAuthor] = useState("")
    const [displayStoryAge_group, setDisplayStoryAge_group] = useState("")
    const [displayStoryGenres, setDisplayStoryGenres] =  useState("")
    const [displayStoryChapter_number, setDisplayStoryChapter_number] =useState("")
    const [displayStoryBody, setDisplayStoryBody] = useState("")
    const [displayStoryStyles, setDisplayStoryStyles] = useState("")
    const [displayStoryTitle, setDisplayStoryTitle] = useState("")

    const history = useHistory();
    const params = useParams();
// Baseline edit function
function handleEdit(displayStory) {
    const id = displayStory.id
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
      author: displayStoryAuthor,
      age_group: displayStoryAge_group,
      genres: displayStoryGenres,
      styles: displayStoryStyles,
      title: displayStoryTitle,
      chapter_number: displayStoryChapter_number,
      body: displayStoryBody
    }
    fetch(`/stories/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(editedStory),
      })
      displayStoryStory_name = displayStory.story_name
      displayStoryAuthor = displayStory.author
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
}



    return (
        <form onSubmit={handleEdit}>
        <input
          placeholder="story_name"
          type="text"
          name="story_name"
          value={displayStoryStory_name}
          onChange={(e) => setDisplayStoryStory_name (e.target.value)}
        />
        <input 
          placeholder="age_group"
          type="text"
          name="age_group"
          value={displayStoryAge_group}
          onChange={(e) => setDisplayStoryAge_group(e.target.value)}
        />  
      <input
          placeholder="genre"
          type="text"
          name="genre"
          value={displayStoryGenres}
          onChange={(e) => setDisplayStoryGenres(e.target.value)}
      />
        <input
          placeholder="style"
          type="text"
          name="style"
          value={displayStoryStyles}
          onChange={(e) => setDisplayStoryStyles(e.target.value)}
        />
           
        <input
          placeholder="chapter_title"
          type="text"
          name="title"
          value={displayStoryTitle}
          onChange={(e) => setDisplayStoryTitle(e.target.value)}
        />

        <input
          placeholder="chapter_number"
          type="integer"
          name="chapter_number"
          value={displayStoryChapter_number}
          onChange={(e) => setDisplayStoryChapter_number(e.target.value)}
        />

        <input
          placeholder="body"
          type="text"
          name="body"
          value={displayStoryBody}
          onChange={(e) => setDisplayStoryBody(e.target.value)}
        />
      
        
      <button placeholder="submit" type="submit">
          Save Edits
        </button>

        <button placeholder="cancel" type='submit' >
            <Link to='/home'>  Cancel Edits</Link>
        </button>
    
      
      
      </form>
    )
}


export default StoryEditor
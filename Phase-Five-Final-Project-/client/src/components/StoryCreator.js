import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

function StoryCreator({ login, onAdd, user, allStories}) {
const [story_name, setStory_name] = useState("")
const [author, setAuthor] = useState("")
const [age_group, setAge_group] =useState("")
const [genre, setGenre] = useState("")
const [style, setStyle] = useState("")
const [title, setTitle]  = useState("")
const [chapter_number, setChapter_number]  = useState()
const [body, setBody]  = useState("")

let history = useHistory()


const handleSubmitStory = (event) => {
    event.preventDefault()
    const storyObject = {
        story_name: story_name,
        author: login.user.username,
        user_id: login.user.id,
        age_group: age_group,
        genre: genre,
        style: style,
        title: title,
        chapter_number: chapter_number,
        body: body,
    };
    fetch('/stories', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(storyObject),
      })
      .then((res)=> res.json())
      .then(onAdd)
      .then(console.log(storyObject))
      
      // .then(history.push(`/story/${storyObject.id}`))
      
      
    // console.log(login.user)
    console.log(storyObject)
}



return(
        <div>
        <h1>Write Your Story</h1>        
        <form onSubmit={handleSubmitStory}>
          <input
            placeholder="story_name"
            type="text"
            name="story_name"
            value={story_name}
            onChange={(e) => setStory_name(e.target.value)}
          />
          <input 
            placeholder="age_group"
            type="text"
            name="age_group"
            value={age_group}
            onChange={(e) => setAge_group(e.target.value)}
          />  
        <input
            placeholder="genre"
            type="text"
            name="genre"
            value={allStories.genre}
            onChange={(e) => setGenre(e.target.value)}
        />
          <input
            placeholder="style"
            type="text"
            name="style"
            value={allStories.style}
            onChange={(e) => setStyle(e.target.value)}
          />
             
          <input
            placeholder="chapter_title"
            type="text"
            name="title"
            value={allStories.title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="chapter_number"
            type="integer"
            name="chapter_number"
            value={allStories.chapter_number}
            onChange={(e) => setChapter_number(e.target.value)}
          />

          <input
            placeholder="body"
            type="text"
            name="body"
            value={allStories.body}
            onChange={(e) => setBody(e.target.value)}
          />
        
          
        <button placeholder="submit" type="submit">
            Submit Story
          </button>
      
        
        
        </form>
        <Link to='/home'> Main Page</Link>
            <Link to='/user'></Link>
      </div>
    )
}

export default StoryCreator
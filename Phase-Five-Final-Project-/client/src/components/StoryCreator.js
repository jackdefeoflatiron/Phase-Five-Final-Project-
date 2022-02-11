import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function StoryCreator({genre, style, login}) {
const [story_name, setStory_name] = useState("")
const [author, setAuthor] = useState("")
const [age_group, setAge_group] =useState("")
const [storyGenre, setStoryGenre] = useState("")
const [storyStyle, setStoryStyle] = useState("")
const [title, setTitle]  = useState("")
const [chapter_number, setChapter_number]  = useState()
const [body, setBody]  = useState("")


const handleSubmitStory = (event) => {
    event.preventDefault()
    console.log(login.user)
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
            placeholder="author"
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            value={storyGenre}
            onChange={(e) => setStoryGenre(e.target.value)}
        />
          <input
            placeholder="style"
            type="text"
            name="style"
            value={storyStyle}
            onChange={(e) => setStoryStyle(e.target.value)}
          />
             
          <input
            placeholder="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="chapter_number"
            type="integer"
            name="chapter_number"
            value={chapter_number}
            onChange={(e) => setChapter_number(e.target.value)}
          />

          <input
            placeholder="body"
            type="text"
            name="body"
            value={body}
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
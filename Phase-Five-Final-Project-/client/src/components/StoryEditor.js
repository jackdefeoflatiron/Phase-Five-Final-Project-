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
    console.log(allStories)
    const params = useParams();
    console.log(params)
    const history = useHistory();
    const displayStory = allStories.find(oneStory => (oneStory.id == params.id))
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
    const [displayStoryGenres, setDisplayStoryGenres] =  useState(displayStory?.genres[0]?.genre)
    const [displayStoryChapter_number, setDisplayStoryChapter_number] =useState(displayStory?.chapters[0]?.chapter_number)
    const [displayStoryBody, setDisplayStoryBody] = useState(displayStory?.chapters[0]?.body)
    const [displayStoryStyles, setDisplayStoryStyles] = useState(displayStory?.styles[0]?.style)
    const [displayStoryTitle, setDisplayStoryTitle] = useState(displayStory?.chapters[0]?.title)

    
    
    
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

  const saveStoryChanges = (e) => {
    e.preventDefault();
    let editedStoryStory = {
      userId: displayStory.userId,
      story_name: displayStoryStory_name,
    //   author: displayStoryAuthor,
      age_group: displayStoryAge_group,
    //   genres: displayStoryGenres,
    //   styles: displayStoryStyles,
    //   title: displayStoryTitle,
    //   chapter_number: displayStoryChapter_number,
    //   body: displayStoryBody
    }
    // const id = displayStory.id
    fetch(`/stories/${displayStory.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(editedStoryStory),
      })
      displayStoryStory_name = displayStory.story_name
    //   displayStoryAuthor = displayStory.author
      displayStoryAge_group = displayStory.age_group
    //   displayStoryGenres = displayStory.genres
    //   displayStoryStyles = displayStory.styles
    //   displayStoryTitle = displayStory.title
    //   displayStoryChapter_number = displayStory.chapter_number
    //   displayStoryBody = displayStory.body
    //   onCancel(false)
    }
    // const handleCancel = () => {
    //   setDisplayStoryStory_name(displayStory.story_name)
    // //   setDisplayStoryAuthor(displayStory.author)
    //   setDisplayStoryAge_group(displayStory.age_group)
    //   setDisplayStoryGenres(displayStory?.genres[0]?.genre)
    //   setDisplayStoryStyles(displayStory?.styles[0]?.style)
    //   setDisplayStoryTitle(displayStory?.chapters[0]?.title)
    //   setDisplayStoryChapter_number(displayStory?.chapters[0]?.chapter_number)
    //   setDisplayStoryBody(displayStory?.chapters[0]?.body)
    //   onCancel(false)
    // }

    const saveGenreChanges = (e) => {
        e.preventDefault();
        let editedStoryGenre = {
          userId: displayStory.userId,
        //   story_name: displayStoryStory_name,
        //   author: displayStoryAuthor,
        //   age_group: displayStoryAge_group,
          genres: displayStoryGenres,
        //   styles: displayStoryStyles,
        //   title: displayStoryTitle,
        //   chapter_number: displayStoryChapter_number,
        //   body: displayStoryBody
        }
        // const id = displayStory.id
        fetch(`/stories/${displayStory.id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(editedStoryGenre),
          })
        //   displayStoryStory_name = displayStory.story_name
        //   displayStoryAuthor = displayStory.author
        //   displayStoryAge_group = displayStory.age_group
          displayStoryGenres = displayStory.genres
        //   displayStoryStyles = displayStory.styles
        //   displayStoryTitle = displayStory.title
        //   displayStoryChapter_number = displayStory.chapter_number
        //   displayStoryBody = displayStory.body
        //   onCancel(false)
        }

        const saveStyleChanges = (e) => {
            e.preventDefault();
            let editedStoryStyle = {
              userId: displayStory.userId,
            //   story_name: displayStoryStory_name,
            //   author: displayStoryAuthor,
            //   age_group: displayStoryAge_group,
            //   genres: displayStoryGenres,
              styles: displayStoryStyles,
            //   title: displayStoryTitle,
            //   chapter_number: displayStoryChapter_number,
            //   body: displayStoryBody
            }
            // const id = displayStory.id
            fetch(`/stories/${displayStory.id}`, {
                method: "PATCH",
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify(editedStoryStyle),
              })
            //   displayStoryStory_name = displayStory.story_name
            //   displayStoryAuthor = displayStory.author
            //   displayStoryAge_group = displayStory.age_group
            //   displayStoryGenres = displayStory.genres
              displayStoryStyles = displayStory.styles
            //   displayStoryTitle = displayStory.title
            //   displayStoryChapter_number = displayStory.chapter_number
            //   displayStoryBody = displayStory.body
            //   onCancel(false)
            }


            const saveChapterChanges = (e) => {
                e.preventDefault();
                let editedStoryChapter = {
                  userId: displayStory.userId,
                //   story_name: displayStoryStory_name,
                //   author: displayStoryAuthor,
                //   age_group: displayStoryAge_group,
                //   genres: displayStoryGenres,
                //   styles: displayStoryStyles,
                  title: displayStoryTitle,
                  chapter_number: displayStoryChapter_number,
                  body: displayStoryBody
                }
                // const id = displayStory.id
                fetch(`/stories/${displayStory.id}`, {
                    method: "PATCH",
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                    },
                    body: JSON.stringify(editedStoryChapter),
                  })
                //   displayStoryStory_name = displayStory.story_name
                //   displayStoryAuthor = displayStory.author
                //   displayStoryAge_group = displayStory.age_group
                //   displayStoryGenres = displayStory.genres
                //   displayStoryStyles = displayStory.styles
                  displayStoryTitle = displayStory.title
                  displayStoryChapter_number = displayStory.chapter_number
                  displayStoryBody = displayStory.body
                //   onCancel(false)
                }



    return (
        <div> Post Edits Here
        <form >
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
        <button placeholder="submit" type="click" onClick={(e)=>saveStoryChanges(e)}>
          {/* <Link to={`/story/${displayStory.id}`}>Save Edits </Link> */}
          Save Edits
        </button>
        </form>
        <form>
      <input
          placeholder="genre"
          type="text"
          name="genre"
          value={displayStoryGenres}
          onChange={(e) => setDisplayStoryGenres(e.target.value)}
      />
      <button placeholder="submit" type="click" onClick={(e)=>saveGenreChanges(e)}>
          {/* <Link to={`/story/${displayStory.id}`}>Save Edits </Link> */}
          Save Edits
        </button>
      </form>
      <form>
        <input
          placeholder="style"
          type="text"
          name="style"
          value={displayStoryStyles}
          onChange={(e) => setDisplayStoryStyles(e.target.value)}
        />
        <button placeholder="submit" type="click" onClick={(e)=>saveStyleChanges(e)}>
          {/* <Link to={`/story/${displayStory.id}`}>Save Edits </Link> */}
          Save Edits
        </button>
           </form>
           <form>
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
         <button placeholder="submit" type="click" onClick={(e)=>saveChapterChanges(e)}>
          {/* <Link to={`/story/${displayStory.id}`}>Save Edits </Link> */}
          Save Edits
        </button>
      </form>
        
      {/* <button placeholder="submit" type="click" onClick={(e)=>saveChanges(e)}>
          <Link to={`/story/${displayStory.id}`}>Save Edits </Link>
        </button> */}

        <button 
        placeholder="cancel" 
        type='click' 
        // onClick={handleCancel} 
        >
            <Link to='/home'>  Cancel Edits</Link>
        </button>
    
      
      
      
      </div>
    )
}


export default StoryEditor
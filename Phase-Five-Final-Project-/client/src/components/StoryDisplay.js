import React, {useEffect, useState} from 'react'


function StoryDisplayer({login, story}) {

const [chapter, setChapter] = useState([])

useEffect(() => {
fetch(`./chapters/${story.id}`)
.then((res)=> res.json())
.then((data) => setChapter(data))
}, [])



return(
    <div>
        <h1>{story?.story_name}</h1>
            <p>{story?.author}</p>
            <p>{story?.age_group}</p>
            {/* <p>{story?.genre}</p>
            <p>{story?.style}</p> */}
            <br></br>
            <p>{chapter?.title}</p>
            <p>{chapter?.chapter_number}</p>
            <p>{chapter?.body}</p>
    </div>
)
}
export default StoryDisplayer
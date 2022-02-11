import React from 'react'
import StoryDisplayer from './StoryDisplay'


function StoryPreview({story}) {


    return(
        <div>
        <l1>
            <h1>{story?.story_name}</h1>
            <p>{story?.author}</p>
            <p>{story?.age_group}</p>
            {/* <p>{story?.genre}</p>
            <p>{story?.style}</p> */}
        </l1>
    </div>
    )
}

export default StoryPreview 
import React from 'react'


function Story({story, genre, style}) {


    return(
        <div>
        <l1>
            <h1>{story?.story_name}</h1>
            <p>{story?.author}</p>
            <p>{story?.age_group}</p>
            <p>{genre?.genre}</p>
            <p>{style?.style}</p>
        </l1>
    </div>
    )
}

export default Story 
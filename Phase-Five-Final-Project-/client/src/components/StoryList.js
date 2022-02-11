import React from 'react'
import StoryPreview from './StoryPreview'


function StoryList({story, style, genre}) {

    return(
        <div> a 
        <StoryPreview>{story}</StoryPreview>
        </div>
    )
        
}

export default StoryList
import React from 'react'
import StoryList from './StoryList'

function StoryListContainer({story, genre, style}) {
return(
    <div>
        <header as='h1'style={{ fontWeight: "lighter" }}>
            Newest Stories{" "}
            <StoryList></StoryList>
        </header>

    </div>
)
}
export default StoryListContainer
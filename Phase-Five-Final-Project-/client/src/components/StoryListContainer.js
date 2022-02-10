import React from 'react'
import StoryList from './StoryList'

function StoryListContainer({story}) {
return(
    <div>
        <header as='h1'style={{ fontWeight: "lighter" }}>
            Newest Stories{" "}
        </header>

    </div>
)
}
export default StoryListContainer
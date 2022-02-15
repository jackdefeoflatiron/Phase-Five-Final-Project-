import React from 'react';
import Searchbar from './SearchBar';


function Header({onchangeSearch, setSearchStories, searchStories}) {





    return(
        <div>
        <header as='h1'style={{ fontWeight: "lighter" }}>
            EReader{" "}
        </header>
        <Searchbar onchangeSearch={setSearchStories} searchStories={searchStories}/>
        </div>
    )
}

export default Header
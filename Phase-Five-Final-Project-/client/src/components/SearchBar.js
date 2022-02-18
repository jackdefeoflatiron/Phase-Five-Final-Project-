import React from  'react'



function Searchbar ({searchStories,onChangeSearch}) {
    const handleSearch = (e) => {
        onChangeSearch(e.target.value)
      }
      return (
        <div className="filter">
          <input onChange={handleSearch} value={searchStories} id="search-bar" type="text" placeholder="Search for Stories" />
        </div>
      );


}



export default Searchbar
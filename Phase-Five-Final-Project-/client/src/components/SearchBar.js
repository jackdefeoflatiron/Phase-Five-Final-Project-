import React from  'react '



function Searchbar ({searchStories,onchangeSearch}) {
    const handleSearch = (e) => {
        onchangeSearch(e.target.value)
      }
      return (
        <div className="filter">
          <input onChange={handleSearch} value={searchStories} id="search-bar" type="text" placeholder="Search Notes" />
        </div>
      );


}



export default Searchbar
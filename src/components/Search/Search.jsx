import React from 'react'
import './Search.css'

function Search({handleSearchValue}) {
    const handleSearch = (e) => {
        handleSearchValue(e.target.value)
    }

    return (
        <input 
            type="text"
            className='search-input'
            onChange={handleSearch}
        />
    )
}

export default Search
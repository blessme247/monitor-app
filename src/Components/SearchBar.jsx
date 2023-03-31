import React from 'react'

const SearchBar = ({customClass, placeholderText}) => {
  return (
    <>
    <form>
        <input className={customClass} type="search" placeholder={placeholderText}/>
    </form>
    </>
  )
}

export default SearchBar
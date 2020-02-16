import React from 'react';

const SearchBox = ({searchField,searchItem}) => {
  return (
    <div className="pa2">
      <input className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchItem}
      />
    </div>
  )
}
export default SearchBox
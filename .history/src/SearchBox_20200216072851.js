import React from 'react';

const SearchBox = ({searchField,search}) => {
  return (
    <div className="pa2">
      <input className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={search}
      />
    </div>
  )
}
export default SearchBox
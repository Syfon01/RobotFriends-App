import React from 'react';
import CardList from './CardList';
i
import { robots } from './robots';

const App = () => {
  return (
    <div>
      <h1>RoboFriends</h1>
      <SearchBox/>
      < CardList robots={robots} />

    </div>
  )
}

export default App;
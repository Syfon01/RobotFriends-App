import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
  return (
    <div>
      <h1>RoboFriends</h1>
      <Sear
      < CardList robots={robots} />

    </div>
  )
}

export default App;
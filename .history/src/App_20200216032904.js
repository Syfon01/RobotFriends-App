import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
  return (
    <div>
      <h1>Robo</h1>
      < CardList robots={robots} />

    </div>
  )
}

export default App;
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots,
      searchField: '',
    }
  }

  onSearchChange(event){
    console.log(event)
  }
  

  render() {
    return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox search=""  />
      < CardList robots={robots} />

    </div>
  )
  }
  
}

export default App;
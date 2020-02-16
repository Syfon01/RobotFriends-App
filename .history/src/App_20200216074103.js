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

  onSearchChange(event) {
    this.setState({this})
    console.log(event.target.value)
  }
  

  render() {
    return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchItem={this.onSearchChange}/>
      < CardList robots={this.state.robots} />

    </div>
  )
  }
  
}

export default App;
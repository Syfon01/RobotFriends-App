import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value })
    console.log(event.target.value)
  }
  

  render() {
    const filterRobot = this.state.robots.filter(robot  )
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
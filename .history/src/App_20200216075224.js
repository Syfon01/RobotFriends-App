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
    this.setState({ searchfield: event.target.value })
    const filterRobot = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
    })
    console.log(filterRobot)
  }
  

  render() {
    
    return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchItem={this.onSearchChange}/>
      < CardList robots={this.state.robot} />

    </div>
  )
  }
  
}

export default App;
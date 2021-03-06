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
    this.setState({
      searchfield: event.target.value
    })
    // console.log(filterRobot)
  }
  
  render() {  
    const searchRobot = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
    <div className="tc">
        <h1>RoboFriends</h1>
        <p>Your search for: {this.on}</p>
      <SearchBox searchItem={this.onSearchChange}/>
      < CardList robots={searchRobot} />

    </div>
  )
  }
  
}

export default App;
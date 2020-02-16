import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(json => console.log(json))
    this.setState({robots})
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
    if (robots.length === 0) {
      return <h1>Loading ...</h1>
    }
    return (
    <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchItem={this.onSearchChange}/>
      < CardList robots={searchRobot} />

    </div>
  )
  }
  
}

export default App;
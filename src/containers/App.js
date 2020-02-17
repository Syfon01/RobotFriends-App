import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
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
      .then(robots =>this.setState({robots}))
    
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }
  
  render() {  
    const searchRobot = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading ...</h1>
    } else {
      return (
        <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchItem={this.onSearchChange} />
          <Scroll>
            <CardList robots={searchRobot} />
          </Scroll>
        </div>
      )
    }
    
  }
  
}

export default App;
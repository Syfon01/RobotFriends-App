import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots =>this.setState({robots}))
    
  }

  render() {  
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const searchRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading ...</h1>
    } else {
      return (
        <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchItem={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={searchRobot} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
    
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
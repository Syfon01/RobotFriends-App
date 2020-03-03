import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAIL
} from './constants'

const initialStateSearch = {
  searchField : ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
  
    default:
      return state
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''   

}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOT_SUCCESS: 
      return Object.assign({}, state, { robots: action.payload, isPending: false });
    case REQUEST_ROBOT_FAIL:
      return Object.assign({}, state, { error: action.paylaod, isPending: false });
    
    default:
      return state
  }
}
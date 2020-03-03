import {
  CHANGE_SEARCHFIELD, 
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAIL
} from './constants'


export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload:  text
})

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOT_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
    .catch(error => dispatch ({type: REQUEST_ROBOT_FAIL, payload: error}))


}
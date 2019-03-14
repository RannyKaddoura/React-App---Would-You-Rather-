import { combineReducers } from 'redux';
import { GET_ALL_USERS, GET_ALL_QUESTIONS } from '../actions/index';

function allUsers(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.allUsers;
    default:
      return state;
  }
}
function allQuestions(state = [], action) {
    switch (action.type) {
      case GET_ALL_QUESTIONS:
        return action.allQuestions;
      default:
        return state;
    }
  }
export default combineReducers({ allUsers, allQuestions });

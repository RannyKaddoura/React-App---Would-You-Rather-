import { combineReducers } from 'redux';
import {
  GET_ALL_USERS,
  GET_ALL_QUESTIONS,
  GET_CURRENT_USER,
  NEW_QUESTIONS
} from '../actions/index';

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
function selectedUser(state = '', action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}

function newQuestion(state = null, action) {
  switch (action.type) {
    case NEW_QUESTIONS:
      return action.newQuestionResponse;
    default:
      return state;
  }
}
export default combineReducers({ allUsers, allQuestions, selectedUser, newQuestion });
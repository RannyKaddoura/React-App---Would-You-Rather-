import { GET_ALL_QUESTIONS } from '../actions/ActionsType';

const INITIAL_STATE = [];

export default function allQuestions(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_ALL_QUESTIONS:
        return action.allQuestions;
      default:
        return state;
    }
  }
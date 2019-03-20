import { NEW_QUESTIONS } from '../actions/ActionsType';

const INITIAL_STATE = null;

export default function newQuestion(state = INITIAL_STATE, action) {
    switch (action.type) {
      case NEW_QUESTIONS:
        return action.newQuestionResponse;
      default:
        return state;
    }
  }

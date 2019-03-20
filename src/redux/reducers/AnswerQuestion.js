import { SAVE_ANSWER } from '../actions/ActionsType';

const INITIAL_STATE = null;

export default function answerQuestion(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SAVE_ANSWER:
        return action.answerResponse;
      default:
        return state;
    }
  }
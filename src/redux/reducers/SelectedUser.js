import { GET_CURRENT_USER } from '../actions/ActionsType';

const INITIAL_STATE = '';

export default function selectedUser(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_CURRENT_USER:
        return action.payload;
      default:
        return state;
    }
  }
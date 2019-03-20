import { GET_ALL_USERS } from '../actions/ActionsType';

const INITIAL_STATE = [];

export default function allUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.allUsers;
    default:
      return state;
  }
}

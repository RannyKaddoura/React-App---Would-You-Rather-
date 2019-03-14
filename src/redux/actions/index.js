import { _getUsers } from '../../util/_Data';
import { _getQuestions } from '../../util/_Data';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';

//======================== getAllUsers =============================

const getAllUsers = allUsers => {
  return {
    type: GET_ALL_USERS,
    allUsers
  };
};

export const fetchUsers = () => {
  return dispatch => {
    return _getUsers().then(allUsers => {
      let convert = [];
      for (var key in allUsers) {
        if (allUsers.hasOwnProperty(key)) {
          convert.push(allUsers[key]);
        }
      }
      dispatch(getAllUsers(convert));
    });
  };
};

//======================== getAllQuestions =============================

const getAllQuestions = allQuestions => {
  return {
    type: GET_ALL_QUESTIONS,
    allQuestions
  };
};

export const fetchQuestions = () => {
  return dispatch => {
    return _getQuestions().then(allQuestions => {
      let convert = [];
      for (var key in allQuestions) {
        if (allQuestions.hasOwnProperty(key)) {
          convert.push(allQuestions[key]);
        }
      }
      dispatch(getAllQuestions(convert));
    });
  };
};

import { _getUsers, _getQuestions, _saveQuestion } from '../../util/_Data';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const NEW_QUESTIONS = 'NEW_QUESTIONS';


//======================== newQuestion =============================

const newQuestion = newQuestionResponse => {
  console.log("newQuestionResponse",newQuestionResponse);
  return {
    type: NEW_QUESTIONS,
    newQuestionResponse
  };
};

export const postQuestion = question => {
  return dispatch => {
    return _saveQuestion(question).then(newQuestionResponse => {
      dispatch(newQuestion(newQuestionResponse));
    });
  };
};

//======================== selectedUsers =============================

export function selectedUser(selectedUser) {
  return {
    type: GET_CURRENT_USER,
    payload: selectedUser
  };
};


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


//======================== ============================= =============================

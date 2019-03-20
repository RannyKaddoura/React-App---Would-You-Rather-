import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from '../../util/_Data';
import {
  GET_ALL_USERS,
  GET_ALL_QUESTIONS,
  GET_CURRENT_USER,
  NEW_QUESTIONS,
  SAVE_ANSWER
} from './ActionsType';

//======================== saveAnswer =============================

const saveAnswer = answerResponse => {
  return {
    type: SAVE_ANSWER,
    answerResponse
  };
};

export const saveQuestionAnswer = (authedUser, qid, answer) => {
  return dispatch => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(res => {
      dispatch(saveAnswer('answerResponse'));
    });
  };
};

//======================== newQuestion =============================

const newQuestion = newQuestionResponse => {
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

export function getSelectedUser(currentUser) {
  return {
    type: GET_CURRENT_USER,
    currentUser
  };
}

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

//==========================================================================

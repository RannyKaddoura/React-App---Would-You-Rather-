import { combineReducers } from 'redux';
import allUsers from './AllUsers';
import allQuestions from './AllQuestions';
import selectedUser from './SelectedUser';
import newQuestion from './NewQuestion';
import answerQuestion from './AnswerQuestion';

const rootReducer = combineReducers({
  allUsers,
  allQuestions,
  selectedUser,
  newQuestion,
  answerQuestion
});

export default rootReducer;

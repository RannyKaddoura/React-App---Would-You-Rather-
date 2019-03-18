import React, { Component } from 'react';
import { Col, CardImg, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/actions/index';
import { bindActionCreators } from 'redux';

class Results extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { allUsers, match, allQuestions, selectedUser, newQuestionResponse } = this.props;
    const qid = match.params.questionId;
    console.log('Results allQuestions', allQuestions);
    console.log("newQuestionResponse",newQuestionResponse);
    return (
      <Row>
        {allQuestions !== null &&
          allQuestions !== undefined &&
          allQuestions
            .filter(item => item.id === qid)
            .map(question => (
              <Col key={question.id} className="question-card" sm={{ size:6,offset:3}}>
                <Row>
                  <Col className="current-user-image" sm={{ size: 4 }}>
                    {allUsers.filter(item => item.id === selectedUser).map(user => (
                        <CardImg
                          key={user.id}
                          src={user.avatarURL}
                          alt="Card image cap"
                        />
                      ))}
                  </Col>
                  <Col className="user-name" sm={{ size: 8 }}>
                    <p className="text-left">
                      <strong>Would you rather .. !</strong>
                    </p>
                    <Col lg="12" className="question-text text-center" style={{ backgroundColor: '#c6c7c8', width:`${(question.optionOne.votes.length / (question.optionTwo.votes.length +question.optionOne.votes.length)) * 100}%`}}>
                        {parseFloat(Math.round((question.optionOne.votes.length / (question.optionOne.votes.length+question.optionTwo.votes.length)) * 100) ).toFixed(2)}
                    </Col>
                    <Col style={{ padding:'0px'}} lg="12">
                      <p className="text-left">{question.optionOne.text}</p>
                      <p>{question.optionOne.votes.length} of {question.optionTwo.votes.length + question.optionOne.votes.length}</p>
                    </Col>
                    <Col lg="12" className="question-text text-center" style={{ backgroundColor: '#c6c7c8', width:`${(question.optionTwo.votes.length / (question.optionTwo.votes.length +question.optionOne.votes.length)) * 100}%`}}>
                      {parseFloat(Math.round((question.optionTwo.votes.length / (question.optionTwo.votes.length +question.optionOne.votes.length)) * 100) ).toFixed(2)}                    
                    </Col>
                    <Col style={{ padding:'0px'}} lg="12">
                      <p className="text-left">{question.optionTwo.text}</p>
                      <p>{question.optionTwo.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
                    </Col>
                  </Col>
                </Row>
              </Col>
            ))}
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    allQuestions: state.allQuestions,
    allUsers: state.allUsers,
    selectedUser: state.selectedUser,
    newQuestionResponse: state.newQuestionResponse
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchQuestions }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

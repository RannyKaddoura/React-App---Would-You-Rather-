import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import history from '../history';
import { connect } from 'react-redux';
import { CircleSvg } from '../util/svg';
import {
  saveQuestionAnswer,
  fetchUsers,
  fetchQuestions
} from '../redux/actions/index';

class Question extends Component {
  state = {
    answer: null,
    currentUser: null
  };

  componentDidMount() {
    const currentUser = sessionStorage.getItem('user');
    this.setState({ currentUser });
    this.props.fetchQuestions();
    this.props.fetchUsers();
  }

  radioChanger = event => {
    const name = event.target.id;
    if (name === 'optionOne') {
      this.setState({ answer: 'optionOne' });
    } else {
      this.setState({ answer: 'optionTwo' });
    }
  };

  SubmitHandler = () => {
    const { match } = this.props;
    const { answer, currentUser } = this.state;
    const qid = match.params.questionId;
    this.props.saveQuestionAnswer(currentUser, qid, answer);
    setTimeout(function() {
      history.push(`/results/${qid}`);
    }, 1000);
  };

  render() {
    const { allUsers, allQuestions, match } = this.props;
    const { currentUser } = this.state;

    return (
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Row className="question-card">
            <Col className="author-image" sm={{ size: 4 }}>
              {allUsers !== 0 &&
                allUsers
                  .filter(item => item.id === currentUser)
                  .map(user => (
                    <img
                      className="selectedUser-avatar"
                      key={user.id}
                      src={user.avatarURL}
                      alt="avatar"
                    />
                  ))}
            </Col>
            <Col className="user-name" sm={{ size: 8 }}>
              <p className="text-left">
                <strong>Would You Rather... </strong>
              </p>

              <div className="row">
                <Col className="text-left" sm="12">
                  <label htmlFor="optionOne" className="btn-radio">
                    <input
                      type="radio"
                      id="optionOne"
                      name="option"
                      onChange={this.radioChanger}
                    />
                    <CircleSvg />
                    <span>
                      {allQuestions
                        .filter(item => item.id === match.params.questionId)
                        .map(q => q.optionOne.text)}
                    </span>
                  </label>
                </Col>
                <Col className="text-left" sm="12">
                  <label htmlFor="optionTwo" className="btn-radio">
                    <input
                      type="radio"
                      id="optionTwo"
                      name="option"
                      onChange={this.radioChanger}
                    />
                    <CircleSvg />
                    <span>
                      {allQuestions
                        .filter(item => item.id === match.params.questionId)
                        .map(q => q.optionTwo.text)}
                    </span>
                  </label>
                </Col>
                <Button className="answer-submit" onClick={this.SubmitHandler}>
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ allQuestions, allUsers }) {
  return {
    allQuestions,
    allUsers
  };
}

export default connect(
  mapStateToProps,
  { saveQuestionAnswer, fetchQuestions, fetchUsers }
)(Question);

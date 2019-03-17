import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import history from '../history';
import { connect } from 'react-redux';
import { CircleSvg } from '../util/svg';

class Question extends Component {
  componentDidMount() {
    const { selectedUser } = this.props;
    if (selectedUser === '') {
      history.push('/login');
    }
  }

  SubmitHandler = () => {
    console.log('SubmitHandler');
    setTimeout(
      function() {
        //history.push(`/questions`);
      },
      100
    );
  };

  radioChanger = event => {
    const name = event.target.id;
    console.log("radio name",name);

  };

  render() {
    const { selectedUser, allUsers, allQuestions, match } = this.props;

    console.log('allQuestions', allQuestions);
    console.log('allUsers', allUsers);

    return (
      <Row>
        {selectedUser !== '' && (
          <Col sm={{ size: 6, offset: 3 }}>
            <Row className="question-card">
              <Col className="author-image" sm={{ size: 4 }}>
                {allUsers !== 0 &&
                  allUsers
                    .filter(item => item.id === selectedUser)
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
                <Button className="answer-submit" onClick={() => this.SubmitHandler()}>Submit</Button>
                </div>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    allQuestions: state.allQuestions,
    allUsers: state.allUsers,
    selectedUser: state.selectedUser
  };
};

export default connect(mapStateToProps)(Question);

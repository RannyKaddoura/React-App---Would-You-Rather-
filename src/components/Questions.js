import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  CardImg
} from 'reactstrap';
import classnames from 'classnames';
import NewQuestion from './NewQuestion';
import history from '../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestions } from '../redux/actions/index';

class Questions extends Component {
  state = {
    activeTab: '1'
  };

  componentDidMount() {
    const { selectedUser } = this.props;
    if (selectedUser === '') {
      history.push('/login');
    }
    this.props.getAllQuestions();
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { allQuestions, allUsers, newQuestionResponse } = this.props;
    console.log("newQuestionResponse in Compo",newQuestionResponse)
    return (
      <Col className="questions" lg={{ size: 6, offset: 3 }}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}>
              Unanswered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}>
              Answered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {allQuestions !== undefined &&
                  allQuestions.map(question => (
                    <Row className="question-card" key={question.id}>
                      <Col className="author-image" sm={{ size: 4 }}>
                        {allUsers
                          .filter(item => item.id === question.author)
                          .map(user => (
                            <CardImg
                              key={user.id}
                              src={user.avatarURL}
                              alt="Card image cap"
                            />
                          ))}
                        <p className="question-author">By: {question.author}</p>
                      </Col>
                      <Col className="user-name" sm={{ size: 8 }}>
                        <p className="text-left"><strong>Would you rather .. !</strong></p>
                        <p className="question-text text-left">
                          {question.optionOne.text}
                        </p>
                        <p>
                          <Link
                            className="question-link"
                            to={`/question/${question.id}`}>
                            View poll
                          </Link>
                        </p>
                      </Col>
                    </Row>
                  ))}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <NewQuestion />
          </TabPane>
        </TabContent>
      </Col>
    );
  }
}
const mapStateToProps = state => {
  return {
    allQuestions: state.allQuestions,
    allUsers: state.allUsers,
    selectedUser : state.selectedUser,
    newQuestionResponse: state.newQuestionResponse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllQuestions: () => dispatch(fetchQuestions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

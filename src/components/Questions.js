import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Col } from 'reactstrap';
import classnames from 'classnames';
import UnAnswered from './UnAnswered';
import Answered from './Answered';
import { connect } from 'react-redux';
import { fetchQuestions, fetchUsers } from '../redux/actions/index';

class Questions extends Component {
  state = {
    activeTab: '1',
    answeredArray: [],
    unAnsweredArray: [],
    currentUser: null
  };

  componentDidMount() {
    const currentUser = sessionStorage.getItem("user");
    this.setState({ currentUser })
    this.props.fetchUsers();
    this.props.fetchQuestions();
  }

  componentWillMount() {
    this.props.fetchUsers();
    this.props.fetchQuestions();
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  componentWillReceiveProps() {
    const { allUsers, allQuestions } = this.props;
    const { currentUser } = this.state;

    const userAnsweredObject = allUsers
      .filter(user => user.id === currentUser)
      .map(user => {
        return user.answers;
      });

    if (
        userAnsweredObject.length > 0 &&
        userAnsweredObject !== undefined &&
        userAnsweredObject !== null
    ) {
      const userAnsweredArray = Object.keys(userAnsweredObject[0]);

      const answeredArray = [];
      const unAnsweredArray = [];

      allQuestions.map(Q => {
        if (userAnsweredArray.indexOf(Q.id) !== -1) {
          unAnsweredArray.push(Q);
        } else {
          answeredArray.push(Q);
        }
        return null;
      });
      this.setState({ answeredArray, unAnsweredArray });
    }
  }

  render() {
    const { allUsers } = this.props;
    const { unAnsweredArray, answeredArray, currentUser } = this.state;

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
            <Answered
              answeredArray={answeredArray}
              selectedUser={currentUser}
              allUsers={allUsers}
            />
          </TabPane>
          <TabPane tabId="2">
            <UnAnswered
              unAnsweredArray={unAnsweredArray}
              selectedUser={currentUser}
              allUsers={allUsers}
            />
          </TabPane>
        </TabContent>
      </Col>
    );
  }
}

function mapStateToProps({ allQuestions, allUsers, selectedUser }) {
  return {
    allQuestions,
    allUsers,
    selectedUser
  };
}

export default connect(
  mapStateToProps,
  { fetchQuestions, fetchUsers }
)(Questions);

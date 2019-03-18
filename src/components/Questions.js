import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Col } from 'reactstrap';
import classnames from 'classnames';
import UnAnswered from './UnAnswered';
import Answered from './Answered';
import history from '../history';
import { connect } from 'react-redux';
import { fetchQuestions, fetchUsers } from '../redux/actions/index';
import { bindActionCreators } from 'redux';

class Questions extends Component {
  state = {
    activeTab: '1',
    answeredArray: [],
    unAnsweredArray: []
  };

  componentDidMount() {
    const { allUsers, allQuestions, selectedUser } = this.props;

    this.props.fetchUsers();
    this.props.fetchQuestions();
    
    if (selectedUser === '') {
      history.push('/login');
    } else {
      const userAnsweredObject = allUsers
        .filter(user => user.id === selectedUser)
        .map(user => {
          return user.answers;
        });
      if (userAnsweredObject !== undefined && userAnsweredObject !== null) {
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.fetchQuestions();
    }
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { allUsers, selectedUser } = this.props;
    const { unAnsweredArray, answeredArray } = this.state;

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
              selectedUser={selectedUser}
              allUsers={allUsers}
            />
          </TabPane>
          <TabPane tabId="2">
            <UnAnswered
              unAnsweredArray={unAnsweredArray}
              selectedUser={selectedUser}
              allUsers={allUsers}
            />
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
    selectedUser: state.selectedUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchQuestions, fetchUsers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

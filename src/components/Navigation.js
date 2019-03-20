import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { NavTab } from 'react-router-tabs';
import history from '../history';
import { connect } from 'react-redux';
import { selectedUser } from '../redux/actions/index';
import { bindActionCreators } from 'redux';

require('react-router-tabs/styles/react-router-tabs.css');

class Navigation extends Component {

  logoutHandler = () => {
    this.props.selectedUser('');
    sessionStorage.removeItem('auth');
    history.push(`/login`);
  };
  

  render() {
    const { currentUser } = this.props;
    return (
      <Row className="navigation mt-4 mb-4">
        <Col className="text-left" lg={{ size: 3 }} />
        <Col className="nav-tab-grpup text-center" lg={{ size: 6 }}>
          <NavTab to="/questions">Questions</NavTab>
          <NavTab to="/newQuestion">NewQuestion</NavTab>
          <NavTab to="/leaderboard">Leaderboard</NavTab>
        </Col>
        <Col className="text-right" lg={{ size: 3 }}>
          {sessionStorage.getItem('auth') === 'vJeHm0n5L3osynxL3DWWC6SjIYZ0DU2w' && (
            <span>
              Hello {currentUser}
              <Button
                style={{ marginLeft: '10px' }}
                color="danger"
                onClick={this.logoutHandler}>
                Logout
              </Button>
            </span>
          )}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.selectedUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectedUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import history from '../history';
import { connect } from 'react-redux';
import { getSelectedUser } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
   
  logoutHandler = () => {
    this.props.getSelectedUser('');
    sessionStorage.clear();
    history.push(`/login`);
  };

  render() { 
    const user = sessionStorage.getItem('user');
    
    return (
      <Row className="navigation mt-4 mb-4">
        <Col className="text-left" lg={{ size: 3 }} />
        <Col className="nav-tab-grpup text-center" lg={{ size: 6 }}>
          <NavLink className="toggle" to="/questions">
            Questions
          </NavLink>
          <NavLink className="toggle" to="/newQuestion">
            NewQuestion
          </NavLink>
          <NavLink className="toggle" to="/leaderboard">
            Leaderboard
          </NavLink>
        </Col>
        <Col className="text-right" lg={{ size: 3 }}>
           {user !== null && (
            <span>
              Hello {user}
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

function mapStateToProps({ selectedUser }) {
  return { selectedUser };
}

export default connect(
  mapStateToProps,
  { getSelectedUser }
)(Navigation);

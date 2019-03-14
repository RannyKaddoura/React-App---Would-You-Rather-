import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { NavTab } from 'react-router-tabs';
import history from '../history';

require('react-router-tabs/styles/react-router-tabs.css');

export default class Navigation extends Component {
  componentDidMount() {
    const { user } = this.props;
    if (user === null) {
      history.push('/login');
    }
  }

  render() {
    const { user, logout } = this.props;
    return (
      <Row className="navigation mt-4 mb-4">
        <Col className="text-left" lg={{ size: 3 }} />
        <Col className="nav-tab-grpup text-center" lg={{ size: 6 }}>
          <NavTab to="/questions">Questions</NavTab>
          <NavTab to="/newQuestion">NewQuestion</NavTab>
          <NavTab to="/dashBoard">DashBoard</NavTab>
        </Col>
        <Col className="text-right" lg={{ size: 3 }}>
          {user && (
            <span>
              Hello {user}
              <Button
                style={{ marginLeft: '10px' }}
                color="danger"
                onClick={() => logout()}>
                Logout
              </Button>
            </span>
          )}
        </Col>
      </Row>
    );
  }
}

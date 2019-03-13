import React, { Component } from 'react';
import { Col, Row, Button, CardImg } from 'reactstrap';

export default class UserCard extends Component {
  render() {
    const { userHandler, user, idx, profilePhoto } = this.props;
    return (
      <Row>
        <Col className="user-image" sm={{ size: 4 }}>
          <CardImg src={profilePhoto[idx]} alt="Card image cap" />{' '}
        </Col>
        <Col className="user-name" sm={{ size: 4 }}>
          {user.fullName}
        </Col>
        <Col className="user-button" sm={{ size: 4 }}>
          <Button onClick={() => userHandler(user.name.toLowerCase())}>
            Login as {user.name}
          </Button>
        </Col>
      </Row>
    );
  }
}

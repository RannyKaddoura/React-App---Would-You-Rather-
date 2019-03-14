import React from 'react';
import { Col, Row, Button, CardImg } from 'reactstrap';

export default function UserCard(props) {
    return (
      <Row>
        <Col className="user-image" sm={{ size: 3 }}>
          <CardImg src={props.user.avatarURL} alt="Card image cap" />
        </Col>
        <Col className="user-name" sm={{ size: 4 }}>
          {props.user.name}
        </Col>
        <Col className="user-button" sm={{ size: 5 }}>
          <Button onClick={() => props.userHandler(props.user.id,props.user.name)}>
            Login as {props.user.id}
          </Button>
        </Col>
      </Row>
    );
  }

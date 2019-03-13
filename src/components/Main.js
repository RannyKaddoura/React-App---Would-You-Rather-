import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col className="mb-3 mt-5" sm={{ size: 12 }}>
          <h1>
            Click <Link to="/login">here</Link> to login{' '}
          </h1>
          <h1> and start using "Would You Rather Application" </h1>
        </Col>
      </Row>
    );
  }
}

import React, { Component } from 'react';
import { Col, Row, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo404 from '../asset/images/error404.jpg'; 

export default class Error404 extends Component {

  render() {
    return (
      <Row>
        <Col className="error-image" sm={{ size: 12 }}>
          <CardImg src={Logo404} alt="Card image cap" />
        </Col>

        <Col className="error-button" sm={{ size: 12 }}>
          <Link to="/">
            Go back to your X
          </Link>
        </Col>
      </Row>
    );
  }
}
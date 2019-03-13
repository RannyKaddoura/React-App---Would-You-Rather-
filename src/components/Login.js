import React, { Component } from 'react';
import { Col, Row, Button, CardImg } from 'reactstrap';
import ReactLoading from 'react-loading';
import Female from '../asset/images/female.png';
import Male from '../asset/images/male.png';
import Man from '../asset/images/man.png';
import Admin from '../asset/images/admin.png';
import UserCard from './userCard';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
  render() {
    const { userHandler, loading } = this.props;

    const users = [
      { fullName: 'Admin User', name: 'Admin' },
      { fullName: 'Tyler McGinnis', name: 'Tyler' },
      { fullName: 'Ranny Kaddoura', name: 'Ranny' },
      { fullName: 'Stupid User', name: 'User' }
    ];

    const profilePhoto = [Admin, Female, Male, Man];

    if (loading) {
      return (
        <div className="loaing text-center">
          <ReactLoading type="bars" color="#786d6d" />
        </div>
      );
    }

    return (
      <Row>
        <Col className="mb-3 mt-5" sm={{ size: 12 }}>
          <h1>Please Login</h1>
        </Col>
        {users.map((user, idx) => (
          <Col
            key={idx}
            sm={{ size: 6, order: 2, offset: 3 }}
            className="user-card">
            <UserCard
              user={user}
              userHandler={userHandler}
              idx={idx}
              profilePhoto={profilePhoto}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

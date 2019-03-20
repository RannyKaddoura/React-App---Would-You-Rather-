import React, { Component } from 'react';
import { Col, Row, Button, CardImg } from 'reactstrap';
import { getSelectedUser, fetchUsers, fetchQuestions } from '../redux/actions/index';
import { connect } from 'react-redux';
import history from '../history';

class UserCard extends Component {

  currentUserHandler = user => {
    sessionStorage.setItem('user',user);
    this.props.getSelectedUser(user);
    this.props.fetchQuestions();
    this.props.fetchUsers();
    sessionStorage.setItem("auth",process.env.REACT_APP_AUTH_TOKEN);
    setTimeout(
      function() {
        history.push(`/questions`)
      },
      500
    );
  };

  render() {
    
    return (
      <Row>
        <Col className="user-image" sm={{ size: 3 }}>
          <CardImg src={this.props.user.avatarURL} alt="Card image cap" />
        </Col>
        <Col className="user-name" sm={{ size: 4 }}>
          {this.props.user.name}
        </Col>
        <Col className="user-button" sm={{ size: 5 }}>
          <Button onClick={() => this.currentUserHandler(this.props.user.id)}>
            Login as {this.props.user.id}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default connect(
  null,
  { getSelectedUser, fetchQuestions, fetchUsers }
)(UserCard);

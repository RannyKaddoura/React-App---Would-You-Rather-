import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ReactLoading from 'react-loading';
import UserCard from './UserCard';
import { connect } from 'react-redux';
import { fetchUsers, fetchQuestions } from '../redux/actions/index';

class Login extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.fetchUsers().then(res => {
      this.props.fetchQuestions();
      this.setState({ loading: false });
    });
  }

  render() {
    const { allUsers } = this.props;
    const { loading } = this.state;

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
          <h1>
            Who Are You.. !!! Please <strong>Login</strong>
          </h1>
        </Col>
        {allUsers.length > 0 &&
          allUsers.map(user => (
            <Col
              key={user.id}
              sm={{ size: 6, order: 2, offset: 3 }}
              className="user-card">
              <UserCard user={user} />
            </Col>
          ))}
      </Row>
    );
  }
}

function mapStateToProps({ allUsers }) {
  return { allUsers };
};

export default connect(
  mapStateToProps,
  {fetchUsers, fetchQuestions}
)(Login);

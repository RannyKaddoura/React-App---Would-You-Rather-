import React, { Component } from 'react';
import { CardImg, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actions/index';

class leaderboard extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { allUsers } = this.props;
    return (
      <Col>
        {allUsers.length > 0 &&
          allUsers.map(user => (
            <Col
              key={user.id}
              className="leaderboard-item"
              sm={{ size: 6, offset: 3 }}>
              <Row>
                <Col className="leaderboard-image" sm="3">
                  <CardImg src={user.avatarURL} alt="Card image cap" />
                </Col>
                <Col className="leaderboard-infos" sm="6">
                  <h3>{user.name}</h3>
                  <p className="answer">
                    Answer Questions :
                    <strong>{Object.keys(user.answers).length} </strong>
                  </p>
                  <p className="created">
                    Created Questions :<strong>{user.questions.length}</strong>
                  </p>
                </Col>
                <Col className="leaderboard-score" sm="3">
                  <Col className="score-text" lg="12">
                    Score
                  </Col>
                  <Col className="score-number" lg="12">
                    {Object.keys(user.answers).length + user.questions.length}
                  </Col>
                </Col>
              </Row>
            </Col>
          ))}
      </Col>
    );
  }
}
function mapStateToProps({ allUsers, selectedUser }) {
  return {
    allUsers,
    selectedUser
  };
}
export default connect(
  mapStateToProps,
  { fetchUsers }
)(leaderboard);

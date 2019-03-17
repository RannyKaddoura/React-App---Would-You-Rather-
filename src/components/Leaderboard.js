import React, { Component } from 'react';
import { CardImg, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/actions/index';
import history from '../history';

class leaderboard extends Component {
  componentDidMount() {
    const { selectedUser } = this.props;
    
      if (selectedUser === '' ) {
        history.push('/login');
      }
    this.props.getAllQuestions();
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
                    Answer Questions : <strong>5</strong>
                  </p>
                  <p className="created">
                    Created Questions : <strong>2</strong>
                  </p>
                </Col>
                <Col className="leaderboard-score" sm="3">
                  <Col className="score-text" lg="12">
                    Score
                  </Col>
                  <Col className="score-number" lg="12">
                    10
                  </Col>
                </Col>
              </Row>
            </Col>
          ))}
      </Col>
    );
  }
}
const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    allQuestions: state.allQuestions,
    selectedUser: state.selectedUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllQuestions: () => dispatch(fetchQuestions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(leaderboard);

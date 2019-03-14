import React, { Component } from 'react';
import { CardImg, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/actions/index';
import history from '../history';

class DashBoard extends Component {
  componentDidMount() {
    const { user } = this.props;
    
      if (user === null ) {
        history.push('/login');
      }
    this.props.getAllQuestions();
  }

  render() {
    const { allUsers, allQuestions, user } = this.props;

    return (
      <Col>
        {allUsers.length > 0 &&
          allUsers.map(user => (
            <Col
              key={user.id}
              className="dashboard-item"
              sm={{ size: 6, offset: 3 }}>
              <Row>
                <Col className="dashboard-image" sm="3">
                  <CardImg src={user.avatarURL} alt="Card image cap" />
                </Col>
                <Col className="dashboard-infos" sm="6">
                  <h3>{user.name}</h3>
                  <p className="answer">
                    Answer Questions : <strong>5</strong>
                  </p>
                  <p className="created">
                    Created Questions : <strong>2</strong>
                  </p>
                </Col>
                <Col className="dashboard-score" sm="3">
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
    allQuestions: state.allQuestions
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
)(DashBoard);

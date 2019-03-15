import React, { Component } from 'react';
import { Col, Row, CardImg } from 'reactstrap';
import { connect } from 'react-redux';
import history from '../history';

class Welcome extends Component {

  componentDidMount() {
    const { selectedUser } = this.props;
    if (selectedUser === '') {
      history.push('/login');
    }
  }

  render() {
    const { selectedUser, allUsers } = this.props;
    
    return (
      <Row>
        <Col className="welcome" sm="12">
            <h1>Welcome {selectedUser}</h1>
            {allUsers !== undefined && allUsers.filter(item => item.id === selectedUser ).map( user => (
                <CardImg key={user.id} src={user.avatarURL}/>
            )) }
          <Col />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    selectedUser: state.selectedUser
  };
};

export default connect(mapStateToProps)(Welcome);

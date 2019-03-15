import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import history from '../history';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  state = {
    activeTab: '1'
  };

  componentDidMount() {
    const { selectedUser } = this.props;
    if (selectedUser === '') {
      history.push('/login');
    }
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printe with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser
  };
};

export default connect(
  mapStateToProps
)(NewQuestion);

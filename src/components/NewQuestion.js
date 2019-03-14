import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import history from '../history';

export default class NewQuestion extends Component {
  state = {
    activeTab: '1'
  };

  componentDidMount() {
    const { user } = this.props;
    if (user === null) {
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
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

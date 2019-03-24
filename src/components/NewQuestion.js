import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import history from '../history';
import { connect } from 'react-redux';
import { postQuestion } from '../redux/actions/index';

class NewQuestion extends Component {
  state = {
    activeTab: '1',
    optionOneText: '',
    optionTwoText: '',
    question: null,
    currentUser: null,
    isDisabled: true
  };

  componentDidMount() {
    const currentUser = sessionStorage.getItem('user');
    this.setState({ currentUser });
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  questionHandler = event => {
    const { optionOneText, optionTwoText } = this.state;
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'optionOneText') {
      this.setState({ optionOneText: value });
      if (value !== '' && optionTwoText !== '') {
        this.setState({ isDisabled: false });
      }
    } else if (name === 'optionTwoText') {
      this.setState({ optionTwoText: value });
      if (value !== '' && optionOneText !== '') {
        this.setState({ isDisabled: false });
      }
    }
  };

  questionSubmit = () => {
    const { optionTwoText, optionOneText, currentUser } = this.state;
    const question = {
      optionOneText,
      optionTwoText,
      author: currentUser
    };
    this.setState({ question });
    this.props.postQuestion(question).then(function(res) {
      console.log('postQuestion', res);
      history.push(`/questions`);
    }, 1000);
  };

  render() {
    const { optionTwoText, optionOneText, isDisabled } = this.state;
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="new-question" body>
            <CardTitle>Create New Question</CardTitle>
            <CardText>
              <strong>Would you rather ...</strong>
            </CardText>
            <input
              value={optionOneText}
              name="optionOneText"
              onChange={this.questionHandler}
            />
            <p className="text-center">
              <strong>or</strong>
            </p>
            <input
              value={optionTwoText}
              name="optionTwoText"
              onChange={this.questionHandler}
            />
            <Button disabled={isDisabled} onClick={this.questionSubmit}>
              Submit
            </Button>
          </Card>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps({ newQuestionResponse }) {
  return {
    newQuestionResponse
  };
}

export default connect(
  mapStateToProps,
  { postQuestion }
)(NewQuestion);

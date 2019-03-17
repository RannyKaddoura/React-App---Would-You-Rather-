import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import history from '../history';
import { connect } from 'react-redux';
import { postQuestion } from '../redux/actions/index';
import { bindActionCreators } from 'redux';

class NewQuestion extends Component {
  state = {
    activeTab: '1',
    optionTwoText: '',
    optionOneText: '',
    question: null
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

  questionHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'optionOneText') {
      this.setState({ optionOneText: value });
    } else {
      this.setState({ optionTwoText: value });
    }
  };

  questionSubmit = () => {
    const { optionTwoText, optionOneText } = this.state;
    const { selectedUser } = this.props;
    const question = {
      optionOneText,
      optionTwoText,
      author: selectedUser
    };
    this.setState({ question });
    this.props.postQuestion(question).then(function() {
      history.push('/questions');
    }, 1000);
  };

  render() {
    const { optionTwoText, optionOneText } = this.state;

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
            <Button onClick={this.questionSubmit}>Submit</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    newQuestionResponse: state.newQuestionResponse
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postQuestion }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);

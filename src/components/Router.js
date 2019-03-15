import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import Navigation from './Navigation';
import Login from './Login';
import Main from './Main';
import Questions from './Questions';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Question from './Question';
import Welcome from './Welcome';

export default class MainRouter extends Component {
  state = {
    user: null,
    userName: null,
    loading: false
  };

  logout = () => {
    this.setState({ loading: true });
    setTimeout(
      function() {
        this.setState({ user: null, loading: false });
        history.push(`/login`);
      }.bind(this),
      100
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <Col>
        <Navigation logout={this.logout} />
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login loading={loading} />
            )}
          />
          <Route path='/user/:selectedUser' component={Welcome} />
          <Route path="/questions" component={Questions} />
          <Route path="/newQuestion" component={NewQuestion} />
          <Route path="/question/:questionId" component={Question} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </Col>
    );
  }
}

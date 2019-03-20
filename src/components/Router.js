import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login';
import Questions from './Questions';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Question from './Question';
import Results from './Results';
import Error404 from './Error404';
import PrivateRouter from './PrivateRouter';

export default class MainRouter extends Component {
  state = {
    loading: false
  };

  render() {
    const { loading } = this.state;

    return (
      <Col>
        <Navigation logout={this.logout} />
        <Switch>
          <PrivateRouter exact path="/newQuestion" component={NewQuestion} />
          <PrivateRouter exact path="/" component={Questions} />
          <PrivateRouter path="/questions" component={Questions} />
          <PrivateRouter path="/question/:questionId" component={Question} />
          <PrivateRouter path="/leaderboard" component={Leaderboard} />
          <PrivateRouter path="/results/:questionId" component={Results} />
          <Route path="/login" render={() => <Login loading={loading} />} />
          <Route component={Error404} />
        </Switch>
      </Col>
    );
  }
}

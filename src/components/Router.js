import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login';
import Questions from './Questions';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Question from './Question';
import Welcome from './Welcome';
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
          <PrivateRouter exact path="/" component={Questions} />
          <Route path="/login" render={() => <Login loading={loading} />} />
          <PrivateRouter path="/user/:selectedUser" component={Welcome} />
          <PrivateRouter path="/questions" component={Questions} />
          <PrivateRouter exact path="/newQuestion" component={NewQuestion} />
          <PrivateRouter path="/question/:questionId" component={Question} />
          <PrivateRouter path="/leaderboard" component={Leaderboard} />
          <PrivateRouter path="/results/:questionId" component={Results} />
          <Route path="/404" component={Error404} />
        </Switch>
      </Col>
    );
  }
}

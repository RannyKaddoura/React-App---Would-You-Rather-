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

  render() { 
    
    return (
      <Col> 
          <Navigation />
        <Switch>
          <PrivateRouter path="/leaderboard"          component={Leaderboard} />
          <PrivateRouter path="/newQuestion"    component={NewQuestion} />
          <PrivateRouter path="/question/:questionId" component={Question} />
          <PrivateRouter path="/questions"            component={Questions} />
          <PrivateRouter path="/results/:questionId"  component={Results} />
          <Route path="/login"      component={Login} />
          <PrivateRouter component={Error404} />
        </Switch>
      </Col>
    );
  }
}

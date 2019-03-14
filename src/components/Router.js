import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import history from '../history';
import Navigation from './Navigation';
import Login from './Login';
import Main from './Main';
import Questions from './Questions';
import NewQuestion from './NewQuestion';
import DashBoard from './DashBoard';

export default class MainRouter extends Component {
  state = {
    user: null,
    userName: null,
    loading: false
  };

  userHandler = (id, name) => {
    this.setState({ loading: true });
    setTimeout(
      function() {
        this.setState({ user: name, loading: false });
        history.push(`/${id}`);
      }.bind(this),
      1000
    );
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
    const { user, loading } = this.state;

    return (
      <Col>
        <Navigation user={user} logout={this.logout} />
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login userHandler={this.userHandler} loading={loading} />
            )}
          />
          <Route path="/questions" render={() => <Questions user={user} />} />
          <Route
            path="/newQuestion"
            render={() => <NewQuestion user={user} />}
          />
          <Route path="/dashBoard" render={() => <DashBoard user={user} />} />
        </Switch>
      </Col>
    );
  }
}

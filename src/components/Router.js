import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './Home';
import Login from './Login';
import Main from './Main';

export default class MainRouter extends Component {
  state = {
    user: null,
    loading: false
  };

  userHandler = user => {
    this.setState({ loading: true });
    setTimeout(
      function() {
        this.setState({ user, loading: false });
        history.push(`/${user}`);
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
      1000
    );
  };

  render() {
    const { user, loading } = this.state;
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main />}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login userHandler={this.userHandler} loading={loading} />
            )}
          />
          <Route
            path="/:user"
            render={() => <Home user={user} logout={this.logout} loading={loading}/>}
          />
        </Switch>
      </Router>
    );
  }
}

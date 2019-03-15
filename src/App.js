import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/Router';
import { Router } from 'react-router-dom';
import history from './history';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <MainRouter />
        </div>
      </Router>
    );
  }
}

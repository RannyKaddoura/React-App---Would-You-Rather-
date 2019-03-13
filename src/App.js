import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import MainRouter from './components/Router';
library.add(faIgloo)


class App extends Component {
  render() {
    return (
      <div className="App">
          <MainRouter />
      </div>
    );
  }
}

export default App;

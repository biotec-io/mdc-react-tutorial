import React, { Component } from 'react';
/* import logo from './logo.svg';*/
import './App.scss';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Welcome to React</Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

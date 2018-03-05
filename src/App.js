import React, { Component } from 'react';
/* import logo from './logo.svg';*/
import './App.scss';
import Header from './components/Header';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Welcome to React</Header>
        <Grid>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Grid>
      </div>
    );
  }
}

export default App;

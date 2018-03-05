import React, { Component } from 'react';
/* import logo from './logo.svg';*/
import './App.scss';
import Header from './components/Header';
import Grid from './components/Grid';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="mdc-typography">
        <Header>Welcome to React</Header>
        <Grid>
          <Card>
            An awesome title
          </Card>
        </Grid>
      </div>
    );
  }
}

export default App;

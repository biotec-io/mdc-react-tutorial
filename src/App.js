import React, { Component } from 'react';

import Header from './components/Header';
import Grid from './components/Grid';
import Card from './components/Card';
import './App.scss';

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

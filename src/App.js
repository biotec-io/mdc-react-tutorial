import React, { Component } from 'react';

import Header from './components/Header';
import Grid from './components/Grid';
import {
  Card,
  CardMedia,
  CardContent,
  CardAction
} from './components/Card';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="mdc-typography">
        <Header>Welcome to React</Header>
        <Grid>
          <Card>
            <CardMedia>
              <CardContent>
                <CardAction>
                  <h2 className="mdc-typography--title">
                    An awesome title
                  </h2>
                </CardAction>
              </CardContent>
            </CardMedia>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default App;

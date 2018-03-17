import React, { Component } from 'react';

import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from './components/Header';
import { Grid, GridInner, GridInnerCell } from './components/Grid';
import { Card, CardMedia, CardContent, CardAction } from './components/Card';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="mdc-typography">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection>
              <ToolbarTitle>
                Welcome to React
              </ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <Grid>
          <GridInner>
            <GridInnerCell>
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
            </GridInnerCell>
          </GridInner>
        </Grid>
      </div>
    );
  }
}

export default App;

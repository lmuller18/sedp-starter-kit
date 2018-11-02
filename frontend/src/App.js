import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import BoxCanvas from './BoxCanvas'
import Chat from './Chat'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={9}>
            <BoxCanvas />
          </Grid>
          <Grid item xs={3}>
            <Chat />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

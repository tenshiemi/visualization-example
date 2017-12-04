import React, { Component } from 'react';
import history from './history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header';
import Intro from './Components/Intro';
import ChartContainer from './Components/ChartContainer';
import './App.css';

class App extends Component {
  componentDidMount() {
    // force an update if the URL changes
    history.listen(() => this.forceUpdate());
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <div className="container">
            <Intro />
            <ChartContainer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

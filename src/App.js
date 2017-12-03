import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import PigChart from './Components/PigChart';
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar position="static" color="default" showMenuIconButton={false} title="Pig Populations of Hawaii" >
          </AppBar>
          <div className="container">
            <PigChart />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

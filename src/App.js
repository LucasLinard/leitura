import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import MainPage from "./MainPage";

class App extends Component {
  render() {
    return (
          <Switch className="App">
              <Route exact path="/" component={MainPage} />
          </Switch>
    );
  }
}

export default App;

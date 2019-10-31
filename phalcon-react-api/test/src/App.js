import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AllUsers from './AllUsers'
import AppRouter from './AppRouter'


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;

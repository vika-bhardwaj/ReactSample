import React, { Component } from 'react';

import Home from './app/home/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <h1 className="App-title">Welcome to {this.props.title}</h1>
        </p>
      </div>
    );
  }
}

export default App;

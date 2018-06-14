import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Routes from './Routes';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Routes /> */}
        <Home />
      </div>
    );
  }
}

export default App;

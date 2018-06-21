import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes isLoggedIn={this.props.user.isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer
  };
};

export default connect(mapStateToProps)(App);
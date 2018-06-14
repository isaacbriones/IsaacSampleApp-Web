import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginUser } from './actions/UserAction';
import { loginStatus } from './actions/UserAction';

import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class App extends Component {
  componentDidMount() {
    this.props.setLoginStatus();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

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

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginStatus: () => {
      dispatch(loginStatus());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

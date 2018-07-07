import React, { Component } from 'react';
import './App.css';
import Invite from './invite'

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <link href="https://fonts.googleapis.com/css?family=Vollkorn" rel="stylesheet" />
        <Invite />
      </div>
    );
  }
}

export default App;

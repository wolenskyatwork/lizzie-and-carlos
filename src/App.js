import React, { Component } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage'

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <link href="https://fonts.googleapis.com/css?family=Vollkorn" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Zeyada" rel="stylesheet" />
        <LandingPage />
      </div>
    );
  }
}

export default App;

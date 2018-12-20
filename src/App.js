import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;

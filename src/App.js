import React, { Component } from 'react';
import './App.scss';
import Topbar from './Topbar/Topbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Topbar />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import './Topbar.scss';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <Navbar />
        <Searchbar />
      </div>
    );
  }
}

export default Topbar;

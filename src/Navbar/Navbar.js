import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Searchbar />
      </div>
    );
  }
}

export default Navbar;

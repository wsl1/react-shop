import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Topbar from '../Topbar/Topbar';

import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Topbar />
        <Searchbar />
      </div>
    );
  }
}

export default Navbar;

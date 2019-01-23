import React, { Component } from 'react';
import User from './User/User';
import Cart from './Cart/Cart';

import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <User width={25} height={25} />
        <Cart width={25} height={25} />
      </div>
    );
  }
}

export default Navbar;

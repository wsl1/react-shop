import React, { Component } from 'react';
import User from './User';
import Cart from './Cart';
import './Topbar.scss';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <User className="user" width={25} height={25} />
        <Cart className="cart" width={25} height={25} />
      </div>
    );
  }
}

export default Topbar;

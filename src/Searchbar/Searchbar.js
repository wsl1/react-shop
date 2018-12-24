import React, { Component } from 'react';
import './Searchbar.scss';
import Magnifier from './Magnifier';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input className="searchbar__input" type="text" placeholder="Search" />
        <button className="searchbar__submit" type="submit">
          <Magnifier />
        </button>
      </div>
    );
  }
}

export default Searchbar;

import React, { Component } from 'react';
import './Searchbar.scss';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input className="searchbar__input" type="text" placeholder="Search" />
        <button className="searchbar__submit" type="submit">a</button>
      </div>
    );
  }
}

export default Searchbar;

import React, { Component } from 'react';
import classNames from 'classnames';
import Magnifier from './Magnifier';
import './Searchbar.scss';

class Searchbar extends Component {
  state = {
    isSubmitted: 0,
  }

  button = React.createRef();

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.setState({ isSubmitted: 0 });
    }
  }

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.setState({ isSubmitted: 1 });
    }
  }

  render() {
    const { isSubmitted } = this.state;
    const submitButton = classNames({
      'searchbar__submit': true,
      'searchbar__submit--active': isSubmitted,
    });
    return (
      <div className="searchbar">
        <input onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} className="searchbar__input" type="text" placeholder="Search" />
        <button ref={this.button} className={submitButton} type="submit">
          <Magnifier width={25} height={25} />
        </button>
      </div>
    );
  }
}

export default Searchbar;

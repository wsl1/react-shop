import React, { Component } from 'react';
import styled from 'styled-components';
import Magnifier from '../Magnifier/Magnifier';

const Wrapper = styled.div`
  display: flex;
  height: 35px;
`;

const Input = styled.input`
  border: 1px solid transparent;
  width: 100%;
  ::placeholder {
    padding: 1px;
  }
  :focus {
    outline: none;
  }
`;

const Submit = styled.button`
    flex-shrink: 0;
    border: 1px solid transparent;
    width: 45px;
    background: ${(props) => props.isSubmitted ? props.theme.buttonActiveColor : props.theme.buttonColor};
    transition: background .3s;
    :active {
    background: ${(props) => props.theme.buttonActiveColor}
    }
    :focus {
      outline: none;
    }
`;

class Searchbar extends Component {
  state = {
    isSubmitted: 0,
  }

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
    return (
      <Wrapper>
        <Input onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} type="text" placeholder="Search" />
        <Submit isSubmitted={isSubmitted} type="submit">
          <Magnifier width={25} height={25} />
        </Submit>
      </Wrapper>
    );
  }
}

export default Searchbar;

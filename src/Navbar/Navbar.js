import React, { Component } from 'react';
import styled from 'styled-components';
import User from './User/User';
import Cart from './Cart/Cart';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <User width={25} height={25} />
        <Cart width={25} height={25} />
      </Wrapper>
    );
  }
}

export default Navbar;

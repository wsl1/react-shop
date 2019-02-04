import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

const Wrapper = styled.div`
    background: #464a49;
    height: 130px;
    padding: 20px 15px;
`;

class Topbar extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Searchbar />
      </Wrapper>
    );
  }
}

export default Topbar;

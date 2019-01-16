import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';
import User from '../Navbar/User/User';
import Cart from '../Navbar/Cart/Cart';

describe('Topbar', () => {
  it('renders User', () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper.find(User).length).toBe(1);
  });
  it('renders Searchbar', () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper.find(Cart).length).toBe(1);
  });
});

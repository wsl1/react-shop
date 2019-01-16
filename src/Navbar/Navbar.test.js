import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import Topbar from '../Topbar/Topbar';
import Searchbar from '../Searchbar/Searchbar';


describe('Navbar', () => {
  it('renders Topbar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Topbar).length).toBe(1);
  });
  it('renders Searchbar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Searchbar).length).toBe(1);
  });
});

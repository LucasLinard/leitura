import React from 'react';
import { shallow, mount, render } from 'enzyme'
import Navbar from './index';

describe('<Navbar />', () => {
    const wrapper = mount(<Navbar/>)


    it('shallow renders without crashing', () => {
        expect(shallow(<Navbar />))
    })

    it('mounts without crashing', () => {
        expect(mount(<Navbar />))
    })

    it('has one Menu component', () => {
        expect(wrapper.find('Menu').length).toBe(1);
    })



})
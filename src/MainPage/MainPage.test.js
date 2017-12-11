import React from 'react';
import { shallow, mount, render } from 'enzyme'
import MainPage from './index';

describe('<MainPage />', () => {
    const wrapper = mount (<MainPage/>)
    it('shallow renders without crashing', () => {
        expect(shallow(<MainPage />))
    })

    it('has a NavBar component', () => {
        expect(wrapper.find('Navbar').length).toBe(1);
    })

})
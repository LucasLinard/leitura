import React from 'react';
import { shallow, mount, render } from 'enzyme'
import App from './App';

describe('<App />', () => {
    const wrapper = mount(<App />)
    it('shallow renders without crashing', () => {
        expect(shallow(<App />))
    })
})
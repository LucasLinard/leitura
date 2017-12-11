import React from 'react';
import { shallow, mount, render } from 'enzyme'
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe('<App />', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <App />
        </MemoryRouter>
    )
    it('shallow renders without crashing', () => {
        expect(shallow(
            <MemoryRouter initialEntries={[ '/' ]}>
                <App />
            </MemoryRouter>
        ))
    })

    xit('mounts without crashing', () => {
        expect(mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <App />
            </MemoryRouter>
        ))
    })


})
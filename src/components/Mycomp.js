import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import ExampleApplication from './MyComp.js';


describe('Component: ExampleApplication', ()=> {
	it('does all the things',()=>{
		expect(true).toEqual(true);
	});
	it('has the message',()=>{
		const wrapper = shallow(<ExampleApplication/>);
       expect(wrapper.find('p').toEqual('React has been running for'));
	});
});
"use strict";

import React from 'react';
import Hello from '../src/hello.jsx';
import chai from 'chai';
import {shallow} from 'enzyme';

chai.should();

describe('react', () => {
  it('renders the component to html', () => {
    const wrapper = shallow(<Hello/>);
    wrapper.html().should.equal('<div class="hello">hello</div>');
  });
});
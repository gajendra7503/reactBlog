import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Signup from './signup';

describe('<Signup />', () => {
  it('should render signup form', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    expect(wrapper.find('form')).to.have.lengthOf(1);
  });

  it('should show error if passwords do not match', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    wrapper.find('input[type="password"]').at(0).simulate('change', { target: { value: 'password1' } });
    wrapper.find('input[type="password"]').at(1).simulate('change', { target: { value: 'password2' } });
    wrapper.find('form').simulate('submit');
    expect(window.alert).to.have.been.calledWith('Passwords do not match.');
  });

  it('should navigate to login on successful signup', async () => {
    const wrapper = mount(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'testuser' } });
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').at(0).simulate('change', { target: { value: 'password' } });
    wrapper.find('input[type="password"]').at(1).simulate('change', { target: { value: 'password' } });
    wrapper.find('form').simulate('submit');
    await new Promise(resolve => setTimeout(resolve, 1000)); // wait for async operations
    expect(window.location.pathname).to.equal('/login');
  });
});

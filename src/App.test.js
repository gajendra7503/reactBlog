import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/Dashboard';

describe('<App />', () => {
  it('should render Login component for /login route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).to.have.lengthOf(1);
  });

  it('should render Signup component for /signup route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Signup)).to.have.lengthOf(1);
  });

  it('should redirect to /login if not authenticated and trying to access /dashboard', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).to.have.lengthOf(1);
  });

  it('should render Dashboard component if authenticated and accessing /dashboard', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    wrapper.setState({ isAuthenticated: true });
    expect(wrapper.find(Dashboard)).to.have.lengthOf(1);
  });
});

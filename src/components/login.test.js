import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Login from './login';

describe('<Login />', () => {
  let wrapper;
  let onLoginStub;
  let navigateStub;

  beforeEach(() => {
    onLoginStub = sinon.stub();
    navigateStub = sinon.stub();
    wrapper = shallow(<Login onLogin={onLoginStub} />);
  });

  it('should render the login form', () => {
    expect(wrapper.find('form')).to.have.lengthOf(1);
    expect(wrapper.find('input[type="email"]')).to.have.lengthOf(1);
    expect(wrapper.find('input[type="password"]')).to.have.lengthOf(1);
    expect(wrapper.find('button[type="submit"]')).to.have.lengthOf(1);
  });

  it('should update state on input change', () => {
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="email"]').prop('value')).to.equal('test@example.com');
    expect(wrapper.find('input[type="password"]').prop('value')).to.equal('password');
  });

  it('should call onLogin and navigate on successful login', async () => {
    const axiosStub = sinon.stub(axios, 'post').resolves({ data: { token: 'fake-token' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    await axiosStub;
    expect(onLoginStub.calledOnce).to.be.true;
    expect(onLoginStub.calledWith('fake-token')).to.be.true;
    axiosStub.restore();
  });

  it('should show an alert on login failure', async () => {
    const axiosStub = sinon.stub(axios, 'post').rejects({ response: { data: { message: 'Login failed' } } });
    const alertStub = sinon.stub(window, 'alert');
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    await axiosStub.catch(() => {});
    expect(alertStub.calledOnce).to.be.true;
    expect(alertStub.calledWith('Login failed')).to.be.true;
    axiosStub.restore();
    alertStub.restore();
  });
});

// Instructions on how to run the test cases
// To run the test cases, follow these steps:

// 1. Ensure you have all the necessary dependencies installed. If not, run:
//    ```sh
//    npm install
//    ```

// 2. Run the tests using the following command:
//    ```sh
//    npm test
//    ```

// This will execute the test cases defined in this file and provide you with the results.

import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../Appointment';

describe('Appointment', () => {
  let container;
  let customer;
  const render = (component) => ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    const component = <Appointment customer={customer} />;
    render(component);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Jordan' };
    const component = <Appointment customer={customer} />;
    render(component);
    expect(container.textContent).toMatch('Jordan');
  });
});

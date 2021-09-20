import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment, AppointmentsDayView } from '../Appointment';

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

describe('AppointmentsDayView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  it('renders multiple appointments in an ol element', () => {
    const today = new Date();
    const appointments = [{ startsAt: today.setHours(12, 0) }, { startsAt: today.setHours(13, 0) }];
    const component = <AppointmentsDayView appointments={appointments} />;
    render(component);
    expect(container.querySelector('ol').children).toHaveLength(2);
  });
});

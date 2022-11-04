import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';

describe('Login Component', () => {
  it('renders the login component', () => {
    render(<Login />);
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';

describe('Login Component', () => {
  it('should call handleChange function on type', async () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Enter Username');
    const passwordInput = screen.getByPlaceholderText('Enter Password');
    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(passwordInput, 'testpass');
    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpass');
  });

  it('does not submit the form with incorrect input', async () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: 'Login' });
    const usernameInput = screen.getByPlaceholderText('Enter Username');
    const passwordInput = screen.getByPlaceholderText('Enter Password');
    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(passwordInput, 'testpass');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Incorrect Login')).toBeInTheDocument();
    });
  });

  it('opens the signup form on create account button click', async () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: 'Create Account' });
    expect(
      screen.queryByRole('heading', { name: 'Signup' })
    ).not.toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
    await userEvent.click(button);
    expect(screen.getByRole('heading', { name: 'Signup' })).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});

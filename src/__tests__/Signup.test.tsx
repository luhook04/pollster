import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Signup from '../components/Signup';

describe('Signup Component', () => {
  it('should display password length error', async () => {
    render(<Signup />);
    const button = screen.getByRole('button', { name: 'Create Account' });
    await userEvent.click(button);
    await waitFor(() => {
      expect(
        screen.getByText('Password must be 5 characters long')
      ).toBeInTheDocument();
    });
  });

  it('should display different password error', async () => {
    render(<Signup />);
    const button = screen.getByRole('button', { name: 'Create Account' });
    const input1 = screen.getByPlaceholderText('Enter Username');
    const input2 = screen.getByPlaceholderText('Enter Password');
    await userEvent.type(input1, 'testuser');
    await userEvent.type(input2, 'f');
    await userEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText("Passwords don't match")).toBeInTheDocument();
    });
  });
});

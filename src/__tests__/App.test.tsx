import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders the heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading').textContent).toMatch(/Pollster/i);
  });

  it('does not render the dropdown menu until menu click', async () => {
    render(<Header />);
    const menu = screen.queryByRole('navigation');
    expect(menu).not.toBeInTheDocument();

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});

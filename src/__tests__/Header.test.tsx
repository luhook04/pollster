import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header Component', () => {
  it('shows the username of the user if they are logged in', () => {});
  it('does not render the dropdown menu until menu click', async () => {
    render(<Header />);
    const menu = screen.queryByRole('navigation');
    expect(menu).not.toBeInTheDocument();

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('closes dropdown menu on outside click', async () => {
    render(<Header />);
    const button = screen.getByRole('button');
    const heading = screen.getByRole('heading');
    // button click
    await userEvent.click(button);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    // click inside
    await userEvent.click(nav);
    expect(nav).toBeInTheDocument();
    // click outside
    await userEvent.click(heading);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});

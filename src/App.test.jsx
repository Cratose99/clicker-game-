import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { TILES } from './data/tiles.js';

describe('Clicker Game', () => {
  it('renders the board and starting scores', () => {
    window.localStorage.clear();
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Clicker Game' })).toBeInTheDocument();
    expect(screen.getByTestId('score')).toHaveTextContent('0');
    expect(screen.getByTestId('top-score')).toHaveTextContent('0');
    expect(screen.getByTestId('remaining')).toHaveTextContent(String(TILES.length));
    expect(screen.getAllByRole('button')).toHaveLength(TILES.length);
  });

  it('increments score on a unique click and ends the run on a repeat', async () => {
    window.localStorage.clear();
    const user = userEvent.setup();
    render(<App />);

    const first = screen.getByRole('button', { name: 'Plasma Flask' });
    await user.click(first);
    expect(screen.getByTestId('score')).toHaveTextContent('1');
    expect(screen.getByTestId('top-score')).toHaveTextContent('1');
    expect(screen.getByTestId('remaining')).toHaveTextContent(String(TILES.length - 1));

    await user.click(screen.getByRole('button', { name: 'Plasma Flask' }));
    expect(screen.getByRole('dialog', { name: 'Already clicked' })).toBeInTheDocument();
    expect(screen.getByTestId('score')).toHaveTextContent('0');
    expect(screen.getByTestId('top-score')).toHaveTextContent('1');

    await user.click(screen.getByRole('button', { name: 'Play again' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByTestId('score')).toHaveTextContent('0');
    expect(screen.getByTestId('top-score')).toHaveTextContent('1');
  });
});

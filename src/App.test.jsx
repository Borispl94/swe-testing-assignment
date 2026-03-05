import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('Calculator Integration Tests', () => {
  it('simulates a full user interaction for addition', () => {
    render(<App />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(display.textContent).toBe('8');
  });

  it('verifies that pressing Clear resets the display to 0', () => {
    render(<App />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('C'));

    expect(display.textContent).toBe('0');
  });
});
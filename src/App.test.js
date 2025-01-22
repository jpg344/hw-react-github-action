import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button clicks trigger alerts', () => {
  // Mock `window.alert` damit keine richtigen alerts ausgelöst werden
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(<App />);

  // Suche buttons via text
  const button1 = screen.getByText(/yes/i);
  const button2 = screen.getByText(/no/i);
  const button3 = screen.getByText(/maybe/i);

  // Simuliere klicks
  fireEvent.click(button1);
  expect(alertMock).toHaveBeenCalledWith('"Yes" clicked!');

  fireEvent.click(button2);
  expect(alertMock).toHaveBeenCalledWith('"No" clicked!');

  fireEvent.click(button3);
  expect(alertMock).toHaveBeenCalledWith('"Maybe" clicked!');

  // Clean up
  alertMock.mockRestore();
});
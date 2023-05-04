import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/MyCalculator';

test('calculator adds numbers correctly', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  // Find the calculator display and check that it starts with '0'
  const display = getByTestId('calculator-display');
  expect(display.textContent).toBe('0');
  // Click the '1' button
  const oneButton = getByText('1');
  fireEvent.click(oneButton);
  // Check that the display now shows '1'
  expect(display.textContent).toBe('1');
  // Click the '+' button
  const plusButton = getByText('+');
  fireEvent.click(plusButton);
  // Click the '2' button
  const twoButton = getByText('2');
  fireEvent.click(twoButton);
  // Click the '=' button
  const equalsButton = getByText('=');
  fireEvent.click(equalsButton);
  // Check that the display now shows '3'
  expect(display.textContent).toBe('3');
});

import operate from '../../logic/operate';

describe(' The function', () => {
  test('add numbers', () => {
    expect(operate(3, 2, '+')).toBe('5');
  });

  test('get the difference between two numbers', () => {
    expect(operate(63, 3, '-')).toBe('60');
  });

  test('multiply numbers', () => {
    expect(operate(2, 14, 'x')).toBe('28');
  });

  test('divide numbers', () => {
    expect(operate(12, 2, '÷')).toBe('6');
  });

  test('get modulus of two numbers', () => {
    expect(operate(12, 2, '%')).toBe('0');
  });
});

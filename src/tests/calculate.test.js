import calculate from '../logic/calculate';  // You need to import the file you want to test

test('reset the value when "AC" is clicked', () => {
  expect(calculate({ total: '100', next: null, operation: null }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});

test('turn number into decimal chen "." is clicked', () => {
  expect(calculate({ total: null, next: '5', operation: null }, '.')).toStrictEqual({ total: null, next: '5.', operation: null });
});

test('set total to 64 when "=" is clicked', () => {
  expect(calculate({ total: '8', next: '8', operation: 'x' }, '=').total).toBe('64');
});

test('Turns number into positive when "+/-" button is clicked', () => {
  expect(calculate({ total: null, next: '-2', operation: null }, '+/-').next).toBe('2');
});

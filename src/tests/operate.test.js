import operate from '../logic/operate'; // You need to import the file you want to test

test('adds 1 + 2 to equal 3', () => {
  expect(operate('1', '2', '+')).toBe('3');
});

test('multiply 18 * 2 to equal 36', () => {
  expect(operate('18', '2', 'x')).toBe('36');
});

test('multiply 5 ÷ 0 to return an error message', () => {
  expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
});

import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button label="+" handleButtonClick={(val) => val} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Button component', () => {
  render(<Button label="+" handleButtonClick={(val) => val} />);
  screen.debug();
});

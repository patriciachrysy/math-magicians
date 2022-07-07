import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Calculator component', () => {
  render(<Calculator />);
  screen.debug();
});

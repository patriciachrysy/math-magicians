import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import Screen from '../../components/Screen';

it('renders correctly', () => {
  const tree = renderer.create(<Screen value="0" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Screen component', () => {
  render(<Screen value="0" />);
  screen.debug();
});

import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Home component', () => {
  render(<Home />);
  screen.debug();
});

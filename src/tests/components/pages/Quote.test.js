import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import Quote from '../../../pages/Quote';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Quote component', () => {
  render(<Quote />);
  screen.debug();
});

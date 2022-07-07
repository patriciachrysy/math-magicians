import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Routing from '../../../pages/Routing';

it('renders correctly', () => {
  const tree = renderer.create(<Routing />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Quote component', () => {
  render(<Routing />);
  screen.debug();
});

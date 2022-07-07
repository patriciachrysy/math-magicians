import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';

it('renders correctly', () => {
  const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Navbar component', () => {
  render(<Router><Navbar /></Router>);
  screen.debug();
});

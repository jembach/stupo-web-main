import React from 'react';
import { render } from '@testing-library/preact';
import Home from '../../src/pages';

test('renders deploy link', () => {
  const { getByText } = render(<Home />);
  const content = getByText(/Welcome to this template/);
  expect(content).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/preact';
import Home from '../../src/pages';

test('renders deploy link', () => {
  const { getByText } = render(<Home />);
  const content = getByText(/Die Platform/);
  expect(content).toBeTruthy();
});

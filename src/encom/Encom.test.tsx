import { render } from '@testing-library/react';
import React from 'react';

import Encom from './Encom';

test('renders title element', () => {
  const { getByText } = render(<Encom />);
  const titleElement = getByText(/encom/i);
  expect(titleElement).toBeInTheDocument();
});

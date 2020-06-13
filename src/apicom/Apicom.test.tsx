import { render } from '@testing-library/react';
import React from 'react';

import Apicom from './Apicom';

test('renders title element', () => {
  const { getByText } = render(<Apicom />);
  const titleElement = getByText(/apicom/i);
  expect(titleElement).toBeInTheDocument();
});

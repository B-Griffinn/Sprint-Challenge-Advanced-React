import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Players from './Components/Players';

test('this is my test', () => {
  const {getByAltText} = render(<Players />);
  getByAltText(/Womens/i)
  getByAltText(/world/i)
  getByAltText(/cup/i)
})


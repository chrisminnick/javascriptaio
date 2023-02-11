/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, screen } from '@testing-library/react';
import { Map } from './App';
it('renders the correct number of obstacles', () => {
  render(<Map numberOfObstacles={10} />);
  const obstacles = screen.getAllByTestId('obstacle');
  expect(obstacles.length).toBe(10);
});

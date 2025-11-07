/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../Button'

test('renders button with children', () => {
  // avoid JSX in test file to bypass transform edge-cases
  render(React.createElement(Button, null, 'Click me'))
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

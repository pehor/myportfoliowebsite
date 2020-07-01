import React from 'react'
import { render } from '@testing-library/react'
import Maintenance from '../../src/pages/maintenance'

describe('about', () => {
  let res
  beforeEach(() => {
    res = render(<Maintenance/>)
  })

  test('renders maintenance text', () => {
    expect(res.getByText(/under maintenance/)).toBeInTheDocument()
  })
})

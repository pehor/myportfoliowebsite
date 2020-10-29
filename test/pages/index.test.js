import React from 'react'
import { render } from '@testing-library/react'
import Index from '../../src/pages/index'

describe('index', () => {
  let res
  beforeEach(() => {
    res = render(<Index texts={{ summary: 'Senior Software engineer' } }/>)
  })

  test('renders some text', () => {
    expect(res.getByText(/Peter Horvath/)).toBeInTheDocument()
  })
})

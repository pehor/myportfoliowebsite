import React from 'react'
import { render } from '@testing-library/react'
import Index from '../../src/pages/index'
import texts from '../../content/texts'
import jobs from '../../content/jobs'
import skills from '../../content/skills'

describe('index', () => {
  let res
  beforeEach(() => {
    res = render(<Index texts={ texts } skills = { skills } jobs={ jobs } />)
  })

  test('renders some text', () => {
    expect(res.getAllByText(/Peter Horvath/i).length > 0)
  })

  test('renders all sections', () => {
    expect(res.getByText(/Welcome/i)).toBeInTheDocument()
    expect(res.getByText(/About me/i)).toBeInTheDocument()
    expect(res.getByText(/Top skills/i)).toBeInTheDocument()
    expect(res.getByText(/My journey/i)).toBeInTheDocument()
    expect(res.getByText(/About this website/i)).toBeInTheDocument()

    const skillsElements = res.getAllByText(/skills/i)
    expect(skillsElements.filter((element) => element !== 'SEE ALL SKILLS' && element !== 'TOP SKILLS')[0])
      .toBeInTheDocument()
  })

  test('renders some skills', () => {
    expect(res.getAllByText(/python/i).length)
    expect(res.getAllByText(/node.js/i).length)
  })

  test('renders some journey elements', () => {
    expect(res.getAllByText(/senior backend engineer/i).length)
    expect(res.getAllByText(/ometria/i).length)
    expect(res.getAllByText(/2020/i).length)
  })
})

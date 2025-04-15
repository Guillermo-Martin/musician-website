/**
 * @jest-environment jsdom
 */
// wrong test environment error:  https://jestjs.io/docs/configuration#testenvironment-string

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

// describe(): used to group related tests together to form a test suite
// takes 2 arguments: string to describe the test suite and function that contains the tests
describe('Page', () => {
  // it() or test(): used to define an individual test
  it('renders a heading', () => {
    // arrange: set up the environment to be tested
    render(<Page />)
 
    // action: perform the action to be tested
    const heading = screen.getByRole('heading', { level: 1 })
 
    // assert: check the result of the action; make sure the thing did what it's supposed to do
    expect(heading).toBeInTheDocument()
  })
})
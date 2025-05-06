/**
 * @jest-environment jsdom
 */
// wrong test environment error:  https://jestjs.io/docs/configuration#testenvironment-string

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page'
import { sanityFetch } from '@/sanity/lib/live';


// ---------- MOCKS ----------
// intercept the real module, replace it with our mock (fake version)
jest.mock('@/sanity/lib/live', () => ({
  sanityFetch: jest.fn(),
}));


// describe(): used to group related tests together to form a test suite
// takes 2 arguments: string to describe the test suite and function that contains the tests
describe('Homepage', () => {
  // it() or test(): used to define an individual test
  it('renders a heading', () => {
    // arrange: set up the environment to be tested
    render(<Page />)
 
    // action: perform the action to be tested
    const heading = screen.getByRole('heading', { level: 1 })
 
    // assert: check the result of the action; make sure the thing did what it's supposed to do
    expect(heading).toBeInTheDocument()
  });

  // -------------------------------------------------------------
  // it should successfully retrieve homepage data from Sanity
  it("Fetches homepage data from Sanity successfully", async () => {
    // arrange
    // * fake the API request to Sanity and tell return fake data
    (sanityFetch as jest.Mock).mockResolvedValue({
      heading: "Homepage title"
    });

    // * render the homepage
    render(<Page />);

    // action
    // * get the heading
    const heading = await screen.findByText('Homepage title');

    // assert
    expect(heading).toBeInTheDocument();
  });
})
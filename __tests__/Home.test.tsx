/**
 * @jest-environment jsdom
 */
// wrong test environment error:  https://jestjs.io/docs/configuration#testenvironment-string

import "@testing-library/jest-dom";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

// ---------- MOCKS ----------
// mocking an API call:  https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
// intercept the real module (sanityFetch - for making requests to Sanity), replace it with our mock (fake version)
jest.mock("@/sanity/lib/live", () => ({
  sanityFetch: jest.fn(),
}));

// describe(): used to group related tests together to form a test suite
// takes 2 arguments: string to describe the test suite and function that contains the tests
describe("Homepage", () => {
  // ---------- Sanity data fetching ----------
  const HOMEPAGE_QUERY = defineQuery(`{
    'homepage': *[_type == 'homepage' && !(_id in path('drafts.**'))]{audio {asset -> {url}}, page_title, image {asset -> {url}, alt_text}, short_description, slug}, 
    'slugs': *[pageType == 'page']
  }`);
  
  it("fetches homepage data correctly", async () => {
    // arrange: return fake data when an API request is made using sanityFetch
    (sanityFetch as jest.Mock).mockResolvedValue({
      data: {
        homepage: [
          {
            audio: { 
              asset: {
                url: "https://www.google.com/"
              }
            },
            image: { 
              alt_text: "This is sample alt text.",
              asset: {
                url: "https://unsplash.com/"
              }
            },
            page_title: "Homepage",
            short_description: "This is a short description of the page.",
            slug: { _type: "slug", current: "/" }
          }
        ],
        slugs: [
          {
            _type: "pianistPage",
            pageType: "page",
            page_title: "Pianist",
            slug: { _type: "slug", current: "pianist" }
          }
        ],
      }
    });

    // action: make an API request using sanityFetch and get back the data
    const { data } = await sanityFetch({ query: HOMEPAGE_QUERY });

    // assert:
    // * that retrieved homepage data is correctly obtained
    expect(data.homepage[0].audio.asset.url).toBe("https://www.google.com/");
    expect(data.homepage[0].image.alt_text).toBe("This is sample alt text.");
    expect(data.homepage[0].image.asset.url).toBe("https://unsplash.com/");
    expect(data.homepage[0].page_title).toBe("Homepage");
    expect(data.homepage[0].short_description).toBe("This is a short description of the page.");

    // * slug data is obtained
    expect(data.slugs[0].slug.current).toBe("pianist");
  });
});

// Cypress causing type errors in Jest assertions: https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
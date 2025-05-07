/**
 * @jest-environment jsdom
 */
// wrong test environment error:  https://jestjs.io/docs/configuration#testenvironment-string

import "@testing-library/jest-dom";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

// ---------- MOCKS ----------
// intercept the real module (sanityFetch - for making requests to Sanity), replace it with our mock (fake version)
jest.mock("@/sanity/lib/live", () => ({
  sanityFetch: jest.fn(),
}));

// describe(): used to group related tests together to form a test suite
// takes 2 arguments: string to describe the test suite and function that contains the tests
describe("Homepage", () => {
  // ---------- Sanity data fetching ----------
  const HOMEPAGE_QUERY = defineQuery(`*[_type == "homepage"]{audio {asset -> {url}}, heading, image {asset -> {url}, alt_text}, short_description}`);
  
  it("fetches homepage data correctly", async () => {
    // arrange: return fake data when an API request is made using sanityFetch
    (sanityFetch as jest.Mock).mockResolvedValue({
      data: [
        { 
          audio: {
            asset: {
              url: "https://www.google.com/"
            }
          },
          heading: "Test Homepage Title",
          image: {
            asset: {
              url: "https://unsplash.com/"
            },
            alt_text: "This is alt text for the image"
          },
          short_description: "Test short description"
        },
      ],
    });

    // action: make an API request using sanityFetch and get back the data
    const { data } = await sanityFetch({ query: HOMEPAGE_QUERY });

    // assert: expect that the heading is from the fake data
    expect(data[0].audio.asset.url).toBe("https://www.google.com/");
    expect(data[0].heading).toBe("Test Homepage Title");
    expect(data[0].image.asset.url).toBe("https://unsplash.com/");
    expect(data[0].image.alt_text).toBe("This is alt text for the image");
    expect(data[0].short_description).toBe("Test short description");
  });
});

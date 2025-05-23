/**
 * @jest-environment jsdom
*/

import { render, screen, within } from "@testing-library/react";

describe("Navbar", () => {
  // * TEST - all page links are rendered and correct in the Navbar component
  it("Renders all of the page links", () => {
    // create an array of expected links
    const expectedLinks = [
        { name: "Home", href: "/" },
        { name: "Pianist", href: "/pianist" },
        { name: "Compositions", href: "/compositions" },
        { name: "Ethnomusicology", href: "/ethnomusicology" },
        { name: "Events", href: "/events" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    // ---------- Arrange ----------
    // render the Navbar component and provide it the array of links as props
    render(
      <Navbar links={expectedLinks} />
    );

    // ---------- Action ----------
    // * get the navbar
    const navbar = screen.queryByRole("nav");

    // loop through each of the expected links
    // querying within elements:  https://testing-library.com/docs/dom-testing-library/api-within/
    for(const link of expectedLinks) {
      // for each href in the "expectedLinks", find the link on the screen using the link's name
      const navLink = within(navbar).getByRole("link", { name: link.name });

      // ---------- Assertions ----------
      // * Expect the navlinks to be in the document
      expect(navLink).toBeInTheDocument();

      // * Expect the href to be the href in the "expectedLinks" array
      expect(navLink.getAttribute("href")).toBe(link.href);

      // * Expect that the text for the link is correct
      expect(navLink).toHaveTextContent(link.name);
    };
  });
});

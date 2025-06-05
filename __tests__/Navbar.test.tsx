/**
 * @jest-environment jsdom
*/
import { render, screen, within } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  // --------------------------------------------------------------------
  // * TEST:  Navbar renders correctly
  // --------------------------------------------------------------------
  it("Renders the navbar on the page", () => {
      // ---------- Arrange ----------
      const expectedLinks = [
        { 
          page_title: "Home",
          slug: {
            current: "/"
          } 
        },
        { 
          page_title: "Pianist",
          slug: {
            current: "pianist"
          } 
        },
        { 
          page_title: "Compositions",
          slug: {
            current: "compositions"
          } 
        },
        { 
          page_title: "Ethnomusicology",
          slug: {
            current: "ethnomusicology"
          } 
        },
        { 
          page_title: "Events",
          slug: {
            current: "events"
          } 
        },
        { 
          page_title: "About",
          slug: {
            current: "about"
          } 
        },
        { 
          page_title: "Contact",
          slug: {
            current: "contact"
          } 
        },
    ];

    // render the component
    render(<Navbar links={expectedLinks} />);

    // ---------- Action ----------
    // get the navbar
    const navbar = screen.getByRole("navigation");

    // ---------- Assert ----------
    // * expect the navbar to be in the document
    expect(navbar).toBeInTheDocument();
  });


  // --------------------------------------------------------------------
  // * TEST:  all page links are rendered and correct in the Navbar component
  // --------------------------------------------------------------------
  it("Renders all of the page links", () => {
    // ---------- Arrange ----------
    const expectedLinks = [
        { 
          page_title: "Home",
          slug: {
            current: "/"
          } 
        },
        { 
          page_title: "Pianist",
          slug: {
            current: "pianist"
          } 
        },
        { 
          page_title: "Compositions",
          slug: {
            current: "compositions"
          } 
        },
        { 
          page_title: "Ethnomusicology",
          slug: {
            current: "ethnomusicology"
          } 
        },
        { 
          page_title: "Events",
          slug: {
            current: "events"
          } 
        },
        { 
          page_title: "About",
          slug: {
            current: "about"
          } 
        },
        { 
          page_title: "Contact",
          slug: {
            current: "contact"
          } 
        },
    ];

    // render the Navbar component and provide it the array of links as props
    render(
      <Navbar links={expectedLinks} />
    );

    // ---------- Action ----------
    // get the navbar
    const navbar = screen.getByRole("navigation");

    // loop through each of the expected links
    // querying within elements:  https://testing-library.com/docs/dom-testing-library/api-within/
    for(const link of expectedLinks) {
      // for each href in the "expectedLinks", find the link on the screen using the link's name
      const navLink = within(navbar).getByRole("link", { name: link.page_title });

      // ---------- Assertions ----------
      // * Expect the navlinks to be in the document
      expect(navLink).toBeInTheDocument();

      // * Expect the href to be the "current" in the "slug" object of the "expectedLinks" array
      expect(navLink.getAttribute("href")).toBe(link.slug.current);

      // * Expect that the text for the link is correct
      expect(navLink).toHaveTextContent(link.page_title);
    };
  });
});

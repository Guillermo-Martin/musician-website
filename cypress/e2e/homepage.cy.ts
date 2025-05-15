describe("Homepage", () => {
  it("renders the homepage with Sanity content", () => {
    // arrange: visit homepage
    cy.visit("/");

    // action: find the elements (h1, subheader, image, audio, navbar links)
    const h1 = cy.get("h1");
    const subHeader = cy.get(".subheader");
    const img = cy.get("img");
    const audio = cy.get("audio");
    const navbarLinks = cy.get(".navbar a");

    // assert:
    // * the h1 has a title
    h1.should("be.visible").and("not.be.empty");

    // * the subheader isn't empty
    subHeader.should("be.visible").and("not.be.empty");

    // * the image has a src and alt
    img.should("be.visible").and("have.attr", "src").and("not.be.empty").and("have.attr", "alt").and("not.be.empty");

    // * the audio has a src
    audio.should("be.visible").and("have.attr", "src").and("not.be.empty");

    // * the navbar has links that aren't empty and the href has a path to the correct page
    navbarLinks.each(link => {
      cy.wrap(link).should("be.visible").and("not.be.empty").and("have.attr", "href").and("not.be.empty");
    });
  });
});

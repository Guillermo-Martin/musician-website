/* eslint-disable no-unused-expressions */
describe("Homepage", () => {
  it("renders the homepage with Sanity content", () => {
    // arrange: visit homepage
    cy.visit("/");

    // action: find the elements (h1, subheader, image, audio, navbar links)
    // const h1 = cy.get("h1");
    // const subHeader = cy.get(".subheader");
    // const img = cy.get("img");
    // const audio = cy.get("audio");
    // const navbarLinks = cy.get(".navbar a");

    // assert:
    // * the h1 has a title
    cy.get("h1").should("be.visible").and("not.be.empty");

    // * the subheader isn't empty
    // subHeader.should("be.visible").and("not.be.empty");

    // * the image should be visible on the page
    // * it should also have a src and alt attribute
    // * the src and alt attributes shouldn't be empty
    // make multiple assertions on the same subject
    cy.get("#homepage-hero-image img").should(($img) => {
      expect($img).to.be.visible;
      expect($img).to.have.attr("src").and.not.be.empty;
      expect($img).to.have.attr("alt").and.not.be.empty;
    });


    // * the audio has a src
    // audio.should("be.visible").and("have.attr", "src").and("not.be.empty");

    // // * the navbar has links that aren't empty and the href has a path to the correct page
    // navbarLinks.each(link => {
    //   cy.wrap(link).should("be.visible").and("not.be.empty").and("have.attr", "href").and("not.be.empty");
    // });
  });
});

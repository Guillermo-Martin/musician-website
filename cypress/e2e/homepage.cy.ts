/* eslint-disable no-unused-expressions */
describe("Homepage", () => {
  it("renders the homepage with Sanity content", () => {
    // arrange: visit homepage
    cy.visit("/");

    // action: find the elements (h1, subheader, image, audio, navbar links)
    
    // assert:
    // * TEST:  the h1 is visible and isn't empty
    cy.get("h1").should("be.visible").and("not.be.empty");


    // * TEST:  the subheader is visible and isn't empty
    cy.get(".subheader").should("be.visible").and("not.be.empty");


    // * TEST:  the image should be visible on the page
    // * it should also have a src and alt attribute, that aren't empty
    // make multiple assertions on the same subject
    cy.get("#homepage-hero-image img").should(($img) => {
      expect($img).to.be.visible;
      expect($img).to.have.attr("src").and.not.be.empty;
      expect($img).to.have.attr("alt").and.not.be.empty;
    });


    // * TEST:  the audio element should be visible on the page
    // * it shoudl also have a src attribute that isn't empty
    cy.get("audio").should(($audio) => {
      expect($audio).to.be.visible;
      expect($audio).to.have.attr("src").and.not.be.empty; 
    });

    // * TEST:  the navbar has links and are visible on the page.
    // * each link has an href that isn't empty and goes to the correct page.
    cy.get(".navbar a").each(($link) => {
      expect($link).to.be.visible;
      expect($link).to.have.attr("href").and.not.be.empty;
    });


  });
});

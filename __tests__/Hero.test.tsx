/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  // Before running each test, render the "Hero" component with props passed in
  // ----- Arrange -----
  beforeEach(() => {
    render(
      <Hero 
        pageTitle="This is the page title"
        description="This is a short description about the page."
        src="/images/placeholder-1.jpg"
        alt="Placeholder image"
      />
    );
  });

  // ---------- it should display an h1 ----------
  it("Renders an H1", () => {
    // ----- Action -----
    // get the h1
    const heading = screen.getByRole("heading", { level: 1 });

    // ----- Assert -----
    // expect the h1 to show up and isn't empty
    expect(heading).toBeInTheDocument();
    expect(heading).not.toBe("");
  });

  // ---------- it should display a description ----------
  it("Renders a short description of the page", () => {
    // ----- Action -----
    const pageDescription = screen.getByTestId("page-description");
  
    // ----- Assert -----
    // expect that the page description is present and isn't empty
    expect(pageDescription).toBeInTheDocument();
    expect(pageDescription).not.toBe("");
  });

  // ---------- it should display an image ----------
  it("Renders an image with an alt tag", () => {
    // ----- Action -----
    const heroImage = screen.getByRole("img");

    // * expect the image component shows up
    expect(heroImage).toBeInTheDocument();
    
    // * expect that the src is there and isn't empty
    expect(heroImage).toHaveAttribute("src");
    expect(heroImage.getAttribute("src")).not.toBe("");

    // * expect that the alt tag isn't empty
    expect(heroImage).toHaveAttribute("alt");
    expect(heroImage.getAttribute("alt")).not.toBe("");
  });

  // ---------- it should only display an image if no description props is passed ----------
  it("Only renders a title and image, if there's no description", () => {
    // remove the previous Hero component render
    cleanup();

    // ----- Arrange -----
    render(
      <Hero 
        pageTitle="This is the page title"
        description={false}
        src="/images/placeholder-1.jpg"
        alt="Placeholder image"
      />
    );

    // ----- Action -----
    // get the page description
    const pageDescription = screen.queryByTestId("page-description");

    // ----- Assert -----
    // expect the description to not be rendered
    expect(pageDescription).not.toBeInTheDocument()
  });
});

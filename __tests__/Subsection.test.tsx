import { render, screen, cleanup } from "@testing-library/react";
import Subsection from "@/components/Subsection";

describe("Subsection", () => {
  // ---------- Arrange ----------
  // Before running each test, render the "Subsection" component with props passed in
  beforeEach(() => {
    render(
      <Subsection 
        subsectionTitle="This is a subsection title"
        description="This is a short paragraph in the subsection"
        src="/images/placeholder-1.jpg"
        alt="Placeholder image"
      />
    );
  });


  // ---------- Tests ----------
  // * TEST: expect the h2 to show up and isn't empty
  it("Renders an H2", () => {
    // ----- Action -----
    // get the h2
    const subsectionHeading = screen.getByRole("heading", { level: 2 });

    // ----- Assertions -----
    expect(subsectionHeading).toBeInTheDocument();
    expect(subsectionHeading).not.toBe("");
  });

  // * TEST: expect the short paragraph to show and not be empty
  it("Renders a short paragraph", () => {
    const subsectionDesc = screen.getByTestId("subsection-desc");

    // ----- Assertions -----
    expect(subsectionDesc).toBeInTheDocument();
    expect(subsectionDesc).not.toBe("");
  });

  // * TEST: expect that the image shows up, has a src and and alt that aren't empty
  it("Renders an image with alt text", () => {
    const subsectionImg = screen.getByTestId("subsection-img");

    // ----- Assertions -----
    expect(subsectionImg).toHaveAttribute("src");
    expect(subsectionImg.getAttribute("src")).not.toBe("");
    expect(subsectionImg).toHaveAttribute("alt");
    expect(subsectionImg.getAttribute("alt")).not.toBe("");
  });

  // * TEST: expect that the only the h2 and paragraph show if there's no image
  it("Only renders the subsection title and short description, if there's no image", () => {
    // remove the previous Subsection component render
    cleanup();

    // ----- Arrange -----
    render(
      <Subsection 
        subsectionTitle="This is a subsection title"
        description="This is a short paragraph in the subsection"
        src={false}
        alt="Placeholder image"
      />
    );

    // ----- Action -----
    const subsectionImg = screen.queryByTestId("subsection-image");

    // ----- Assertions -----
    expect(subsectionImg).not.toBeInTheDocument();
  });
});
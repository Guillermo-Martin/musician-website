import type { Metadata } from "next";
import About from "./about";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "About page",
  description: "About the musician."
}

// ---------- Page ----------
function AboutPage() {
  return <About />
};

export default AboutPage;

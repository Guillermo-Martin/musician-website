import type { Metadata } from "next";
import Contact from "./Contact";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact"
}

// ---------- Page ----------
function ContactPage() {
  return <Contact />
};

export default ContactPage;

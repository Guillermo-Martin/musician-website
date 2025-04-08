import type { Metadata } from "next";
import Pianist from "./Pianist";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Pianist page",
  description: "Pianist"
}

// ---------- Page ----------
function PianistPage() {
  return <Pianist />
};

export default PianistPage;

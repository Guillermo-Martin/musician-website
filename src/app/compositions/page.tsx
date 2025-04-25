import type { Metadata } from "next";
import Compositions from "./Compositions"

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Compositions page",
  description: "Compositions."
}

// ---------- Page ----------
function CompositionsPage() {
  return <Compositions />
};

export default CompositionsPage;

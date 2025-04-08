import type { Metadata } from "next";
import Ethnomusicology from "./Ethnomusicology";

export const metadata: Metadata = {
  title: "Ethnomusicology page",
  description: "Ethnomusicology"
}

function EthnomusicologyPage() {
  return <Ethnomusicology />
};

export default EthnomusicologyPage;

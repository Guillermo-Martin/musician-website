import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import Ethnomusicology from "./Ethnomusicology";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Ethnomusicology page",
  description: "Ethnomusicology"
}

// ---------- Query to Sanity ----------
const ETHNOMUSICOLOGY_PAGE_QUERY = defineQuery(`{
  'ethnomusicologyPage': *[_type == 'ethnomusicologyPage' && !(_id in path('drafts.**'))]{
    'heroText': {page_title, short_description},
    'heroImage': {hero_image {asset -> {url}, alt_text}},
    'section-1-title': section_1,
    'section-1-works': works_1[]{title, description},
    'section-2-title': section_2,
    'section-2-works': works_2[]{title, description},
    'section-3-title': section_3,
    'section-3-works': works_3[]{title, description},
    'section-4-title': section_4,
    'section-4-works': works_4[]{title, description},
  }
}`);


// ---------- Page ----------
async function EthnomusicologyPage() {
  // query Sanity to get data and pass props to "Ethnomusicology" component
  const { data } = await sanityFetch({ query: ETHNOMUSICOLOGY_PAGE_QUERY });

  console.log("Ethnomusicology data", data);

  return <Ethnomusicology />
};

export default EthnomusicologyPage;

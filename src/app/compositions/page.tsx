import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import Compositions from "./Compositions"

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Compositions page",
  description: "Compositions."
}

// ---------- Query to Sanity ----------
const COMPOSITIONS_PAGE_QUERY = defineQuery(`{
  'compositionsPage': *[_type == 'compositionsPage' && !(_id in path('drafts.**'))]{
    'heroText': {page_title, short_description},
    'heroImage': {hero_image {asset -> {url}, alt_text}},
    'subsectionText': {subsection1_title, subsection1_description},
    "works": works[]{title, audio_file {asset -> {url}}}
  }
}`);

// ---------- Page ----------
async function CompositionsPage() {
  // query Sanity to get data and pass as props to "Compositions" component
  const { data } = await sanityFetch({ query: COMPOSITIONS_PAGE_QUERY });

  return <Compositions data={data}/>
};

export default CompositionsPage;

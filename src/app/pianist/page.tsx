import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import Pianist from "./Pianist";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Pianist page",
  description: "Pianist"
}

// ---------- Query to Sanity ----------
const PIANIST_PAGE_QUERY = defineQuery(`{
  'pianistPage': *[_type == 'pianistPage' && !(_id in path('drafts.**'))]{
    'heroText': {page_title, short_description},
    'heroImage': {hero_image {asset -> {url}, alt_text}},
    'performances': performances[]{_key, title, youtube_share_link},
    'cds': cds[]{_key, title, cd_image {asset -> {url}, alt_text}, songs[]{_key, title, audio {asset -> {url}}}}
  }
}`);

// ---------- Page ----------
async function PianistPage() {
  // query Sanity to get data and pass props to "Pianist" component
  const { data } = await sanityFetch({ query: PIANIST_PAGE_QUERY });

  // console.log("pianist data", data)

  return <Pianist data={data} />;
};

export default PianistPage;

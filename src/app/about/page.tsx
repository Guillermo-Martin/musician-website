import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import About from "./About";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "About page",
  description: "About the musician."
}

const ABOUT_PAGE_QUERY = defineQuery(`{
  'aboutPage': *[_type == 'aboutPage' && !(_id in path('drafts.**'))]{
	  'aboutPageText': {page_title, subsection1_description, subsection1_title, subsection2_description, subsection2_title, subsection3_description, subsection3_title, quote},
	  'heroImage': {hero_image {asset -> {url}, alt_text}},
	  'subsectionImages': [subsection1_image, subsection2_image, quote_image][]{asset -> {url}, alt_text},
	  'gallery': [gallery_image1, gallery_image2, gallery_image3, gallery_image4, gallery_image5, gallery_image6, gallery_image7, gallery_image8, gallery_image9][]{asset -> {url}, alt_text},
  }
}`)

// Query "About" page information
// Pass data as props to About component


// ---------- Page ----------
async function AboutPage() {
  // query sanity and get data
  const { data } = await sanityFetch({query: ABOUT_PAGE_QUERY})

  // console.log("IN ABOUT", data);

  return <About data={data} />
};

export default AboutPage;

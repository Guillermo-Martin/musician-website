import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import Contact from "./Contact";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact"
}


// ---------- Query to Sanity ----------
const CONTACT_PAGE_QUERY = defineQuery(`{
  'contactPage': *[_type == 'contactPage' && !(_id in path('drafts.**'))]{
    'heroText': {page_title, short_description},
    'socials': socials[]{social_media, href}
  }
}`);

// ---------- Page ----------
async function ContactPage() {
  // query Sanity to get data and pass as props to "Contact" component
  const { data } = await sanityFetch({ query: CONTACT_PAGE_QUERY });

  console.log("here's your data for contacts", data);

  return <Contact data={data} />
};

export default ContactPage;

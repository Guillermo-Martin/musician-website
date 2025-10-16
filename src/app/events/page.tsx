import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import Events from "./Events";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Events page",
  description: "Events"
}

// ---------- Query to Sanity ----------
const EVENTS_PAGE_QUERY = defineQuery(`{
  'eventsPage': *[_type == 'eventsPage' && !(_id in path('drafts.**'))]{
    'heroText': {page_title, short_description},
    'heroImage': {hero_image {asset -> {url}, alt_text}},
    'upcomingEvents': upcoming_events[]{date, time, location, description, link}
	 }
}`);



// ---------- Page ----------
async function EventsPage() {
  // query Sanity to get data and pass props to "Events" component
  const { data } = await sanityFetch({ query: EVENTS_PAGE_QUERY });

  return <Events data={data} />
};

export default EventsPage;
import type { Metadata } from "next";
import Events from "./Events";

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Events page",
  description: "Events"
}

// ---------- Page ----------
function EventsPage() {
  return <Events />
};

export default EventsPage;
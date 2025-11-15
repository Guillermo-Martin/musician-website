import Image from "next/image";
import type { EventsProps } from "@/interfaces/Interfaces";

function Events({ data }: EventsProps) {
  // destructure hero information and get all upcoming events
  const { heroImage, heroText } = data.eventsPage[0];
  const upcomingEvents = data.eventsPage[0].upcomingEvents;
  
  // for every upcoming event, create a div with all the info
  const allUpcomingEvents = upcomingEvents.map(event => {
    return (
      <div key={event.event_name}>
        <h3>{event.event_name}</h3>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        {event.link ? <p>Buy tickets here: {event.link}</p> : null}
      </div>
    );
  });

  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <div className="hero-section">
        {/* ----- Text container ----- */}
        <div className="text-container">
          <h1>{heroText.page_title}</h1>
          <p>{heroText.short_description}</p>
        </div>
        
        {/* ----- Image container ----- */}
        <div className="image-container">
          <Image src={heroImage.hero_image.asset.url} alt={heroImage.hero_image.alt_text} width={680} height={428} />
        </div>
      </div>

      {/* ---------- Upcoming events section ---------- */}
      <div className="upcoming-events">
        <h2>Upcoming events</h2>
        <div className="events">{allUpcomingEvents}</div>
      </div>
    </div>
  );
};

export default Events;

import Image from "next/image";

function Events() {
  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <div className="hero-section">
        {/* ----- Text container ----- */}
        <div className="text-container">
          <h1>Events page</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nobis esse est. Error sed alias earum ipsum officiis labore veritatis minima repellat tempore laborum eligendi nostrum, laudantium facere aperiam illum.</p>
        </div>
        
        {/* ----- Image container ----- */}
        <div className="image-container">
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
        </div>
      </div>

      {/* ---------- Events section ---------- */}
      <div className="events">
        {/* ----- Event ----- */}
        <div>
          <h2>Event</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsa cupiditate consectetur maiores laudantium fugiat voluptatibus necessitatibus. Aliquid iste voluptatum culpa dicta deleniti dolorem assumenda quod consequuntur, ipsum cumque commodi!</p>
        </div>
        {/* ----- Event ----- */}
        <div>
          <h2>Event</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsa cupiditate consectetur maiores laudantium fugiat voluptatibus necessitatibus. Aliquid iste voluptatum culpa dicta deleniti dolorem assumenda quod consequuntur, ipsum cumque commodi!</p>
        </div>
        {/* ----- Event ----- */}
        <div>
          <h2>Event</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsa cupiditate consectetur maiores laudantium fugiat voluptatibus necessitatibus. Aliquid iste voluptatum culpa dicta deleniti dolorem assumenda quod consequuntur, ipsum cumque commodi!</p>
        </div>
        {/* ----- Event ----- */}
        <div>
          <h2>Event</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsa cupiditate consectetur maiores laudantium fugiat voluptatibus necessitatibus. Aliquid iste voluptatum culpa dicta deleniti dolorem assumenda quod consequuntur, ipsum cumque commodi!</p>
        </div>
        {/* ----- Event ----- */}
        <div>
          <h2>Event</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsa cupiditate consectetur maiores laudantium fugiat voluptatibus necessitatibus. Aliquid iste voluptatum culpa dicta deleniti dolorem assumenda quod consequuntur, ipsum cumque commodi!</p>
        </div>
      </div>
    </div>
  );
};

export default Events;


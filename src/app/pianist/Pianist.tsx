import Image from "next/image";

function Pianist() {
  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <div className="hero-section">
        {/* ----- Text container ----- */}
        <div className="text-container">
          <h1>Pianist page</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nobis esse est. Error sed alias earum ipsum officiis labore veritatis minima repellat tempore laborum eligendi nostrum, laudantium facere aperiam illum.</p>
        </div>
        
        {/* ----- Image container ----- */}
        <div className="image-container">
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
        </div>
      </div>

      {/* ---------- Audio section ---------- */}
      <div className="audio-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>Audio</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>

        {/* ----- Audio container ----- */}
        <div>
          <ul>
            <li>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste quas mollitia maxime quam, iure in eligendi perspiciatis eos eveniet aperiam quibusdam facere alias veritatis facilis amet? Nulla, omnis architecto.</p>
              <audio controls src={null}></audio>
            </li>
            <li>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste quas mollitia maxime quam, iure in eligendi perspiciatis eos eveniet aperiam quibusdam facere alias veritatis facilis amet? Nulla, omnis architecto.</p>
              <audio controls src={null}></audio>
            </li>
            <li>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste quas mollitia maxime quam, iure in eligendi perspiciatis eos eveniet aperiam quibusdam facere alias veritatis facilis amet? Nulla, omnis architecto.</p>
              <audio controls src={null}></audio>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- Performances section ---------- */}
      <div className="performances-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>Performances</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>

        {/* ----- Videos container ----- */}
        <div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
        </div>
      </div>

      {/* ---------- CDs section ---------- */}
      <div className="cd-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>CDs</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>
        
        {/* ----- CD container ----- */}
        <div>
          {/* CD */}
          <div>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
            <h3>CD title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
          </div>
          {/* CD */}
          <div>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
            <h3>CD title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pianist;

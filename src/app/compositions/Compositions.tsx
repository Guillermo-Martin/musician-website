import Image from "next/image";

function Compositions() {
  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <div className="hero-section">
        {/* ----- Text container ----- */}
        <div className="text-container">
          <h1>Compositions page</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nobis esse est. Error sed alias earum ipsum officiis labore veritatis minima repellat tempore laborum eligendi nostrum, laudantium facere aperiam illum.</p>
        </div>
        
        {/* ----- Image container ----- */}
        <div className="image-container">
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
        </div>
      </div>

      {/* ---------- Works ---------- */}
      <div className="works">
        {/* ----- Text container ----- */}
        <div className="text-container">
          <h2>Works</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati voluptates, omnis cumque placeat quidem, dicta culpa perspiciatis vitae aperiam provident modi rerum tempore voluptate ipsa, officia error reprehenderit corrupti.</p>
        </div>

        {/* ----- Works ----- */}
        <div className="works-container">
          {/* Work */}
          <div className="work">
            {/* Title and year */}
            <div>
              <h3>Title of work</h3>
              <p>Year</p>
            </div>

            {/* Description and player */}
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
              <audio controls src={null}></audio>
            </div>
          </div>

          {/* Work */}
          <div className="work">
            {/* Title and year */}
            <div>
              <h3>Title of work</h3>
              <p>Year</p>
            </div>

            {/* Description and player */}
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
              <audio controls src={null}></audio>
            </div>
          </div>

          {/* Work */}
          <div className="work">
            {/* Title and year */}
            <div>
              <h3>Title of work</h3>
              <p>Year</p>
            </div>

            {/* Description and player */}
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
              <audio controls src={null}></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compositions;

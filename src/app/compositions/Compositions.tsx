import Image from "next/image";
import Hero from "@/components/Hero";
import Audio from "@/components/Audio";
import Subsection from "@/components/Subsection";

function Compositions() {
  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <Hero pageTitle="This is the 'Compositions' page" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati voluptates, omnis cumque placeat quidem, dicta culpa perspiciatis vitae aperiam provident modi rerum tempore voluptate ipsa, officia error reprehenderit corrupti." src="/images/placeholder-1.jpg" alt="placeholder image" />

      {/* ---------- Works ---------- */}
      <div className="works">
        {/* ----- Text container ----- */}
        {/* <div className="text-container">
          <h2>Works</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati voluptates, omnis cumque placeat quidem, dicta culpa perspiciatis vitae aperiam provident modi rerum tempore voluptate ipsa, officia error reprehenderit corrupti.</p>
        </div> */}
        <Subsection subsectionTitle="My works" description="I describe my works here" src={null} alt="" />

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
            {/* <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
              <audio controls src={null}></audio>
            </div> */}
            <Audio />
          </div>

          {/* Work */}
          <div className="work">
            {/* Title and year */}
            <div>
              <h3>Title of work</h3>
              <p>Year</p>
            </div>

            {/* Description and player */}
            {/* <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
              <audio controls src={null}></audio>
            </div> */}
            <Audio />
          </div>

          {/* Work */}
          <div className="work">
            {/* Title and year */}
            <div>
              <h3>Title of work</h3>
              <p>Year</p>
            </div>

            {/* Description and player */}
            {/* <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
              <audio controls src={null}></audio>
            </div> */}
            <Audio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compositions;

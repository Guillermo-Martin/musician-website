import Image from "next/image";
import Hero from "@/components/Hero";
import Audio from "@/components/Audio";
import Subsection from "@/components/Subsection";

// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------

function Compositions({ data }) {
  const { heroImage, heroText, subsectionText, works } = data.compositionsPage[0]

  console.log("hero", works)

  // loop through works and create a "works" section
  const allWorks = works.map(work => {
    return (
      <div className="work">
        {/* Title and year */}
        <div>
          <h3>{work.title}</h3>
          <p>Year</p>
        </div>

        {/* Description and player */}
        {/* <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius, quidem quas sequi rem provident aspernatur nisi! Necessitatibus, maxime. Et ea quia, libero fugiat labore totam temporibus nulla fuga alias?</p>
          <audio controls src={null}></audio>
        </div> */}
        <Audio src={work.audio_file.asset.url} description={work.title} />
      </div>
    );
  });


  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <Hero pageTitle={heroText.page_title} description={heroText.description} src={heroImage.hero_image.asset.url} alt={heroImage.hero_image.alt_text} />

      {/* ---------- Works ---------- */}
      <div className="works">
        <Subsection subsectionTitle={subsectionText.subsection1_title} description={subsectionText.subsection1_description} src={null} alt="" />

        {/* ----- Works ----- */}
        <div className="works-container">{allWorks}</div>
      </div>
    </div>
  );
};

export default Compositions;

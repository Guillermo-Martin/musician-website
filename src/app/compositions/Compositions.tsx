// import Image from "next/image";
import Hero from "@/components/Hero";
import Audio from "@/components/Audio";
import Subsection from "@/components/Subsection";
import type { CompositionsProps } from "@/interfaces/Interfaces";

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function Compositions({ data }: CompositionsProps) {
  const { heroImage, heroText, subsectionText, works } = data.compositionsPage[0]

  // console.log("here's your data", data)

  // console.log("hero", works)

  // loop through works and create a "works" section
  const allWorks = works.map(work => {
    return (  
      <Audio 
        src={work.audio_file.asset.url}
        title={work.title}
        date={work.date}
        description={work.description} 
        key={work.title}
      />
    );
  });


  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <Hero pageTitle={heroText.page_title} description={heroText.short_description} src={heroImage.hero_image.asset.url} alt={heroImage.hero_image.alt_text} />

      {/* ---------- Works section ---------- */}
      <div className="works">
        <Subsection subsectionTitle={subsectionText.subsection1_title} description={subsectionText.subsection1_description} src={null} alt="" />

        {/* ----- All audio ----- */}
        <div className="works-container">{allWorks}</div>
      </div>
    </div>
  );
};

export default Compositions;

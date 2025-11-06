import Image from "next/image";
import Hero from "@/components/Hero";
import Subsection from "@/components/Subsection";
import type { ImageInterface, AboutProps } from "@/interfaces/Interfaces";

function About({ data }: AboutProps) {
  // destructure data
  const { aboutPageText, gallery, heroImage, subsectionImages } = data.aboutPage[0];

  // ---------- Gallery images ----------
  // for every image in the "gallery" array, create an "Image" component
  const galleryImages = gallery.map((image: ImageInterface) => {
    // console.log("Image type", image)
    return <Image src={image.asset.url} alt={image.alt_text} key={image.asset.url} width={600} height={600} />
  });

  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <Hero pageTitle={aboutPageText.page_title} description={false} src={heroImage.hero_image.asset.url}  alt={heroImage.hero_image.alt_text} />
    
      {/* ---------- Main about section ---------- */}
      <div>
        {/* ----- Subsection 1 ----- */}
        <Subsection
          subsectionTitle={aboutPageText.subsection1_title}
          description={aboutPageText.subsection1_description}
          src={subsectionImages[0].asset.url}
          alt={subsectionImages[0].alt_text}
        />

        {/* ----- Subsection 2 ----- */}
        <Subsection
          subsectionTitle={aboutPageText.subsection2_title}
          description={aboutPageText.subsection2_description}
          src={subsectionImages[1].asset.url}
          alt={subsectionImages[1].alt_text}
        />

        {/* ----- Subsection 3----- */}
        <Subsection
          subsectionTitle={aboutPageText.subsection3_title}
          description={aboutPageText.subsection3_description}
          src={null}
          alt=""
        />
          
        {/* ----- Quote section ----- */}
        <div>
          <Image src={subsectionImages[2].asset.url} alt={subsectionImages[2].alt_text} width={680} height={428} />
          <p>"{aboutPageText.quote}"</p>
        </div>
      </div>

      {/* ---------- Gallery ---------- */}
      <div>
        {/* ----- Text container ----- */}
        <div>
          <h2>Gallery</h2>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur nisi modi hic fugit dolor consequatur quia perferendis fugiat? Ab asperiores eaque nesciunt aut, fugiat delectus. Nesciunt et cumque quaerat?</p> */}
        </div>

        {/* ----- Image gallery ----- */}
        <div>{galleryImages}</div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import type { ImageInterface } from "@/interfaces/Interfaces"


// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface ItemInterface {
  description: string;
  title: string;
};

interface EthnomusicologyProps {
  data: {
    ethnomusicologyPage: {
      heroImage: {
        hero_image: ImageInterface;
      };
      heroText: {
        page_title: string;
        short_description: string;
      };
      "section-1-title": string;
      "section-1-works": ItemInterface[];
      "section-2-title": string;
      "section-2-works": ItemInterface[];
      "section-3-title": string;
      "section-3-works": ItemInterface[];
      "section-4-title": string;
      "section-4-works": ItemInterface[];
    }[];
  };
};


// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function Ethnomusicology({ data }: EthnomusicologyProps) {
  // destructure hero information
  const { heroImage, heroText } = data.ethnomusicologyPage[0];

  // function to generate items to be rendered in each section
  const listItems = (arr: ItemInterface[]) => {
    return arr.map((item: ItemInterface) => {
      return (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      );
    });
  };

  // abstracts, publiations, conference papers, and courses JSX elements
  const allAbstracts = listItems(data.ethnomusicologyPage[0]["section-1-works"]);
  const allPublications = listItems(data.ethnomusicologyPage[0]["section-2-works"]);
  const allConferencePapers = listItems(data.ethnomusicologyPage[0]["section-3-works"]);
  const allCourses = listItems(data.ethnomusicologyPage[0]["section-4-works"]);

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

      {/* ---------- Abstracts ---------- */}
      <div className="abstracts">
        <h2>{data.ethnomusicologyPage[0]["section-1-title"]}</h2>

        {/* ----- Abstract ----- */}
        <div>{allAbstracts}</div>
      </div>

      {/* ---------- Publications ---------- */}
      <div className="publications">
        <h2>{data.ethnomusicologyPage[0]["section-2-title"]}</h2>

        {/* ----- Publication ----- */}
        <div>{allPublications}</div>
      </div>

      {/* ---------- Conference papers ---------- */}
      <div className="conference-papers">
        <h2>{data.ethnomusicologyPage[0]["section-3-title"]}</h2>

        {/* ----- Conference paper ----- */}
        <div>{allConferencePapers}</div>
      </div>

      {/* ---------- Courses taught ---------- */}
      <div className="courses">
        <h2>{data.ethnomusicologyPage[0]["section-4-title"]}</h2>

        {/* ----- Course taught ----- */}
        <div>{allCourses}</div>
      </div>
    </div>
  );
};

export default Ethnomusicology;

import Image from "next/image";

// interface
interface SubsectionProps {
  subsectionTitle: string;
  description: string;
  src: string | null;
  alt: string;
}

function Subsection({ subsectionTitle, description, src, alt }: SubsectionProps){
  return (
    <div className="subsection">
      {/* ---------- Text container ---------- */}
      <div className="text-container">
        <h2>{subsectionTitle}</h2>
        <p data-testid="subsection-desc">{description}</p>
      </div>
      
      {/* ---------- Image container ---------- */}
      <div className="image-container">
        {/* if "src" is null, don't show the image, otherwise, show the image */}
        { src === null ? null : <Image src={src} alt={alt} width={600} height={600} data-testid="subsection-img" /> }
      </div>
    </div>
  );
};

export default Subsection;

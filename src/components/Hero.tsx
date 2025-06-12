import Image from "next/image";

// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface HeroProps {
  pageTitle: string;
  description: string | boolean;
  src: string;
  alt: string;
};

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function Hero({ pageTitle, description, src, alt }: HeroProps) {
  return (
    <div className="hero-section">
      {/* ---------- Page title ---------- */}
      <h1>{pageTitle}</h1>

      {/* ---------- Hero image and description ---------- */}
      <div className="hero-main-content">
        {/* If a description is available show it, otherwise just show the image */}
        { description ? <p data-testid="page-description">{description}</p> : null }
        <Image src={src} alt={alt} width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;

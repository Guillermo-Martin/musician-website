import Image from "next/image";
import Hero from "@/components/Hero";
import Subsection from "@/components/Subsection";

function About() {
  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <Hero pageTitle="About page" description={false} src="/images/placeholder-1.jpg"  alt="some text" />
    
      {/* ---------- Main about section ---------- */}
      <div>
        {/* ----- Subsection ----- */}
        <Subsection subsectionTitle="I'm a subsection title!" description="Description will go here" src="/images/placeholder-1.jpg" alt="subsection image alt text" />

        {/* ----- Subsection ----- */}
        <Subsection subsectionTitle="I'm a subsection title!" description="Description will go here" src="/images/placeholder-1.jpg" alt="subsection image alt text" />

        {/* ----- Subsection ver. 2----- */}
        <Subsection subsectionTitle="I'm a subsection title!" description="Description will go here" src={null} alt="" />
          
          
        {/* ----- Quote section ----- */}
        <div>
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ex sed sint vero sunt dolorem non quibusdam aliquid? Dignissimos eveniet ullam totam cupiditate molestias fuga doloribus exercitationem, a beatae quae!</p>
        </div>
      </div>

      {/* ---------- Gallery ---------- */}
      <div>
        {/* ----- Text container ----- */}
        <div>
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur nisi modi hic fugit dolor consequatur quia perferendis fugiat? Ab asperiores eaque nesciunt aut, fugiat delectus. Nesciunt et cumque quaerat?</p>
        </div>

        {/* ----- Image gallery ----- */}
        <div>
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default About;

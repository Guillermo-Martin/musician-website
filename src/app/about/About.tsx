import Image from "next/image";

function About() {
  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <div>
        <h1>About page</h1>
        <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
      </div>
      
      {/* ---------- Main about section ---------- */}
      <div>
        {/* ----- Subsection ----- */}
        <div className="subsection">
          {/* Text container */}
          <div className="text-container">
            <h2>Subsection title</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum veritatis recusandae fugit, inventore cupiditate incidunt esse magnam dignissimos. Voluptates sed excepturi perferendis. Neque expedita officiis sequi ducimus est asperiores unde!</p>
          </div>
          
          {/* Image container */}
          <div className="image-container">
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
        </div>

        {/* ----- Subsection ----- */}
        <div className="subsection">
          {/* Text container */}
          <div className="text-container">
            <h2>Subsection title</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum veritatis recusandae fugit, inventore cupiditate incidunt esse magnam dignissimos. Voluptates sed excepturi perferendis. Neque expedita officiis sequi ducimus est asperiores unde!</p>
          </div>
          
          {/* Image container */}
          <div className="image-container">
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
        </div>

        {/* ----- Subsection ver. 2----- */}
        <div className="subsection">
          {/* Text container */}
          <div className="text-container">
            <h2>Subsection title</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum veritatis recusandae fugit, inventore cupiditate incidunt esse magnam dignissimos. Voluptates sed excepturi perferendis. Neque expedita officiis sequi ducimus est asperiores unde!</p>
          </div>
          
          {/* Image container */}
          <div className="image-container">
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>

          {/* Quote */}
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

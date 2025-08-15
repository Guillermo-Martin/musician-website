import Image from "next/image";

function Ethnomusicology({ data }) {
  // console.log("data", data.ethnomusicologyPage[0]);
  // console.log("data", data.ethnomusicologyPage[0].heroImage.hero_image);

  const { heroImage, heroText } = data.ethnomusicologyPage[0];

  // abstracts
  const abstracts = data.ethnomusicologyPage[0]["section-1-works"];
  // console.log(abstracts)

  const allAbstracts = abstracts.map(abstract => {
    return (
      <div>
        <h3>{abstract.title}</h3>
        <p>{abstract.description}</p>
      </div>
    );
  });


  // publications
  const publications = data.ethnomusicologyPage[0]["section-2-works"];

  const allPublications = publications.map(publication => {
    return (
      <div>
        <h3>{publication.title}</h3>
        <p>{publication.description}</p>
      </div>
    );
  });

  // conference papers
  const conferencePapers = data.ethnomusicologyPage[0]["section-3-works"];

  const allConferencePapers = conferencePapers.map(paper => {
    return (
      <div>
        <h3>{paper.title}</h3>
        <p>{paper.description}</p>
      </div>
    );
  });

  // courses taught
  const courses = data.ethnomusicologyPage[0]["section-4-works"];

  const allCourses = courses.map(course => {
    return (
      <div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    );
  });

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

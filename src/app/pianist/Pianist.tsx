import Image from "next/image";
import type { ImageInterface } from "@/interfaces/Interfaces";

// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface PianistProps {
  data: {
    pianistPage: {
      heroImage: {
        hero_image: ImageInterface;
      };
      heroText: {
        page_title: string;
        short_description: string;
      };
      cds: {
        cd_image: ImageInterface;
        songs: {
          audio: {
            asset: {
              url: string;
            };
            title: string;
            _key: string;
          };
          title: string;
          _key: string;
        }[];
        title: string;
        _key: string;
      }[];
      performances: {
        title: string;
        youtube_share_link: string;
        _key: string;
      }[];
    }[];
  };
};


function Pianist({ data }: PianistProps) {
  // destructure hero information
  const { heroImage, heroText, performances, cds } = data.pianistPage[0];

  // for each YouTube video, create an iframe
  const allVideos = performances.map(performance => {
    // get the youtube video id from the share link
    // 1. split the link by "https://youtu.be/"
    //    - you'll get an array that looks like: ["https://youtu.be/", "1yfxp1NhLIs?si=TedHUzcuviVe9pM-"]
    // 2. next, get the second half of the link (which is index 1)
    // 3. split that string by "?".
    //    - you'll get an array that looks like: ["1yfxp1NhLIs", "si=TedHUzcuviVe9pM-"]
    //    - the string at index 0 is the video id
    const youTubeVideoId = performance.youtube_share_link.split("https://youtu.be/")[1].split("?")[0]

    // create the youtube embed link
    // YouTube embed url for iframe: https://developers.google.com/youtube/player_parameters#:~:text=AI%2Dgenerated%20Key%20Takeaways,listType%20parameters%20in%20the%20URL.
    let youTubeEmbedLink = `https://www.youtube.com/embed/${youTubeVideoId}`

    // add the youTubeEmbedLink to the youtube's iframe
    return (
      <div key={performance._key}>
        <h3>{performance.title}</h3>
        <iframe width="560" height="315" src={youTubeEmbedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    );
  });

  // for each cd, create a "cd info section" with the title, image, and songs
  const allCds = cds.map(cd => {
    // for each song in a cd, create an audio player
    const cdSongs = cd.songs.map(song => {
      return (
        <div>
          <h6>{song.title}</h6>
          <audio controls src={song.audio.asset.url}></audio>
        </div>
      );
    });

    return (
      <div>
        <Image src={cd.cd_image.asset.url} alt={cd.cd_image.alt_text} width={680} height={428} />
        <h5>{cd.title}</h5>
        <div>{cdSongs}</div>
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

      {/* ---------- Performances section ---------- */}
      <div className="performances-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>Performances</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>

        {/* ----- Videos container ----- */}
        <div>{allVideos}</div>
      </div>

      {/* ---------- CDs section ---------- */}
      <div className="cd-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>CDs</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>
        
        {/* ----- CD container ----- */}
        <div>{allCds}</div>
      </div>
    </div>
  );
};

export default Pianist;

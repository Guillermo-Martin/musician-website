import Image from "next/image";
import type { ImageInterface } from "@/interfaces/Interfaces";

// example (eventually replace with fetched data from Sanity)
// const videoLinks = [
//   "https://youtu.be/1yfxp1NhLIs?si=TedHUzcuviVe9pM-",
//   "https://youtu.be/FYS1pGUFUlo?si=4N44i1445ntwdndM",
//   "https://youtu.be/8eOTsaz_Gb4?si=KaJ5UAv4ZaMqGAdr",
//   "https://youtu.be/JoMLoPYbbns?si=SFdf2KmYlVOhySEi"
// ]

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
  console.log("in Pianist page", data)

  // const allVideos = videoLinks.map(link => {
  //   // get the youtube video id from the share link
  //   // 1. split the link by "https://youtu.be/"
  //   //    - you'll get an array that looks like: ["https://youtu.be/", "1yfxp1NhLIs?si=TedHUzcuviVe9pM-"]
  //   // 2. next, get the second half of the link (which is index 1)
  //   // 3. split that string by "?".
  //   //    - you'll get an array that looks like: ["1yfxp1NhLIs", "si=TedHUzcuviVe9pM-"]
  //   //    - the string at index 0 is the video id
  //   const youTubeVideoId = link.split("https://youtu.be/")[1].split("?")[0]

  //   // create the youtube embed link
  //   // YouTube embed url for iframe: https://developers.google.com/youtube/player_parameters#:~:text=AI%2Dgenerated%20Key%20Takeaways,listType%20parameters%20in%20the%20URL.
  //   let youTubeEmbedLink = `https://www.youtube.com/embed/${youTubeVideoId}`

  //   // add the youTubeEmbedLink to the youtube's iframe
  //   return (
  //     <iframe width="560" height="315" src={youTubeEmbedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  //   );
  // });


  return (
    <div>
      {/* ---------- Hero section ---------- */}
      <div className="hero-section">
        {/* ----- Text container ----- */}
        <div className="text-container">
          <h1>Pianist page</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nobis esse est. Error sed alias earum ipsum officiis labore veritatis minima repellat tempore laborum eligendi nostrum, laudantium facere aperiam illum.</p>
        </div>
        
        {/* ----- Image container ----- */}
        <div className="image-container">
          <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
        </div>

        {/* ----- Youtube videos ----- */}
        {/* <div>{allVideos}</div> */}
      </div>

      {/* ---------- Audio section ---------- */}
      <div className="audio-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>Audio</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>

        {/* ----- Audio container ----- */}
        <div>
          <ul>
            <li>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste quas mollitia maxime quam, iure in eligendi perspiciatis eos eveniet aperiam quibusdam facere alias veritatis facilis amet? Nulla, omnis architecto.</p>
              <audio controls src={null}></audio>
            </li>
            <li>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste quas mollitia maxime quam, iure in eligendi perspiciatis eos eveniet aperiam quibusdam facere alias veritatis facilis amet? Nulla, omnis architecto.</p>
              <audio controls src={null}></audio>
            </li>
            <li>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste quas mollitia maxime quam, iure in eligendi perspiciatis eos eveniet aperiam quibusdam facere alias veritatis facilis amet? Nulla, omnis architecto.</p>
              <audio controls src={null}></audio>
            </li>
          </ul>
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
        <div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
          <div>
            <p>Video title</p>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
          </div>
        </div>
      </div>

      {/* ---------- CDs section ---------- */}
      <div className="cd-section">
        {/* ----- Text container ----- */}
        <div>
          <h2>CDs</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
        </div>
        
        {/* ----- CD container ----- */}
        <div>
          {/* CD */}
          <div>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
            <h3>CD title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
          </div>
          {/* CD */}
          <div>
            <Image src="/images/placeholder-1.jpg" alt="Placeholer image" width={680} height={428} />
            <h3>CD title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime accusantium ex eaque quaerat, et, hic tempora corporis eius libero neque sint tenetur excepturi quod, consequuntur nihil perferendis sapiente necessitatibus.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pianist;

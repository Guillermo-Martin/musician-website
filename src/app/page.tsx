// --------------------- MY WORKING STUFF -----------------------
import Image from "next/image";
import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Navbar from "@/components/Navbar";

// ---------- Interfaces ---------
interface Slug {
  page_title: "string";
  slug: {
    current: "string";
  }
};

// Query to get homepage information
// how to get url for assets uploaded to Sanity:  https://stackoverflow.com/questions/74935677/how-to-show-my-image-from-sanity-to-react-app
// combining queries into one request: https://www.sanity.io/docs/content-lake/query-cheat-sheet#55d30f6804cc
const HOMEPAGE_QUERY = defineQuery(`{
  'homepage': *[_type == 'homepage' && !(_id in path('drafts.**'))]{audio {asset -> {url}}, page_title, image {asset -> {url}, alt_text}, short_description, slug}, 
  'slugs': *[pageType == 'page']
}`);

export default async function Home() {
  // query sanity and get data
  const { data } = await sanityFetch({query: HOMEPAGE_QUERY});
  const slugData = data.slugs;

  // for every slug, get the page title and the "current" slug, and make an "li" element
  // containing a Link component
  const navLinks = slugData.map((slug: Slug) => {
    return (
      <li key={slug.page_title}><Link href={slug.slug.current}>{slug.page_title}</Link></li>
    );
  });

  return (
    <div>
      <Navbar />
      <h1>{data.homepage[0].page_title}</h1>

      {/* Sidenav */}
      <nav className="navbar">
        <ul>{navLinks}</ul>
      </nav>

      <main>
        {/* Image */}
        <div id="homepage-hero-image">
          <Image src={data.homepage[0].image.asset.url} alt={data.homepage[0].image.alt_text} width={600} height={600} id="homepage-hero-image"/>
        </div>
        
        {/* Intro text and audio */}
        <div>
          <p className="subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <audio controls src={data.homepage[0].audio.asset.url}></audio>
        </div>
      </main>
    </div>
  );
};



//     // ------------------------ SAMPLE ----------------------------

//     // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//     //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//     //     <Image
//     //       className="dark:invert"
//     //       src="/next.svg"
//     //       alt="Next.js logo"
//     //       width={180}
//     //       height={38}
//     //       priority
//     //     />
//     //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//     //       <li className="mb-2 tracking-[-.01em]">
//     //         Get started by editing{" "}
//     //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//     //           src/app/page.tsx
//     //         </code>
//     //         .
//     //       </li>
//     //       <li className="tracking-[-.01em]">
//     //         Save and see your changes instantly.
//     //       </li>
//     //     </ol>

//     //     <div className="flex gap-4 items-center flex-col sm:flex-row">
//     //       <a
//     //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//     //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         <Image
//     //           className="dark:invert"
//     //           src="/vercel.svg"
//     //           alt="Vercel logomark"
//     //           width={20}
//     //           height={20}
//     //         />
//     //         Deploy now
//     //       </a>
//     //       <a
//     //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//     //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         Read our docs
//     //       </a>
//     //     </div>
//     //   </main>

//     //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/file.svg"
//     //         alt="File icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Learn
//     //     </a>
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/window.svg"
//     //         alt="Window icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Examples
//     //     </a>
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/globe.svg"
//     //         alt="Globe icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Go to nextjs.org →
//     //     </a>
//     //   </footer>
//     // </div>
//   );
// }

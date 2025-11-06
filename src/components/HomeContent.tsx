"use client";
import Image from "next/image";
import Link from "next/link";
import type { Homepage, Slug } from "@/interfaces/Interfaces";
import Footer from "@/components/Footer";

// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface HomePageData {
  homepage: Homepage[];
  slugs: Slug[];
};

interface HomeContentProps {
  data: HomePageData;
};

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function HomeContent({ data }: HomeContentProps) {
  return (
    <div>
      <h1>{data.homepage[0].page_title}</h1>
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

      {/* ---------- Footer ---------- */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomeContent;

"use client";
import Image from "next/image";
import type { HomeContentProps } from "@/interfaces/Interfaces";

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
    </div>
  );
};

export default HomeContent;

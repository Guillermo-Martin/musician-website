"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports:  https://nextjs.org/learn/seo/dynamic-import-components
// * Dynamically load the "HomeContent" component on the client-side
// * { ssr: false }: won't render this component on the server-side; render the component
//   on the client-side when the component is loaded into the browser
const HomeContent = dynamic(() => import("./HomeContent"), { ssr: false });

// ---------- Interfaces ---------
interface Homepage {
  audio: { 
    asset: { url: string}
  };
  image: { 
    alt_text: string,
    asset: { url: string }
  };
  page_title: string;
  short_description: string;
  slug: { current: string };
};

interface Slug {
  page_title: "string";
  slug: {
    current: "string";
  }
};

interface HomePageData {
  homepage: Homepage[];
  slugs: Slug[];
}

interface ClientWrapperProps {
  data: HomePageData;
};



// data is an object with "homepage" and "slugs"
// homepage is an array of objects
// slugs is an array of objects

// function ClientWrapper({ data, slugData }) {
function ClientWrapper({ data }: ClientWrapperProps) {
  // console.log("Client wrapper:", slugData)
  console.log("ClientWrapper:", data)

  return (
    // React <Suspense>:  https://react.dev/reference/react/Suspense
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent data={data} />
    </Suspense>
  );
}

export default ClientWrapper;

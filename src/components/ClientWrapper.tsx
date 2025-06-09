"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { Homepage, Slug } from "@/interfaces/Interfaces";

// Dynamic imports:  https://nextjs.org/learn/seo/dynamic-import-components
// * Dynamically load the "HomeContent" component on the client-side
// * { ssr: false }: won't render this component on the server-side; render the component
//   on the client-side when the component is loaded into the browser
const HomeContent = dynamic(() => import("./HomeContent"), { ssr: false });

// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface HomePageData {
  homepage: Homepage[];
  slugs: Slug[];
};

interface ClientWrapperProps {
  data: HomePageData;
};

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function ClientWrapper({ data }: ClientWrapperProps) {
  return (
    // React <Suspense>:  https://react.dev/reference/react/Suspense
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent data={data} />
    </Suspense>
  );
};

export default ClientWrapper;

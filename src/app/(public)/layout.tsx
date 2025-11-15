import React from 'react';
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// using a different layout for different app routes:  https://stackoverflow.com/questions/77806627/how-to-use-a-completely-different-layout-in-a-nested-component-in-nextjs-app-rou
// using route groups:  https://nextjs.org/docs/app/api-reference/file-conventions/route-groups

// sanity query to make navbar
const NAVBAR_QUERY = defineQuery(`{'slugs': *[pageType == 'page']}`);

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  // query sanity and get link data
  const { data } = await sanityFetch({query: NAVBAR_QUERY});
  // console.log("in the layout", data.slugs)

  const allLinks = data.slugs.map(slug => {
    // console.log(slug)
    return {
      pageTitle: slug.page_title,
      link: slug.slug.current
    };
  });
  
  return (
    <div>
      <Navbar links={allLinks} />
        <main>{children}</main>
      <Footer />
    </div>
  );
}
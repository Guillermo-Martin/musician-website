"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Slug } from "@/interfaces/Interfaces";

// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface NavbarProps {
  // links is going to be an array of objects
  links: Slug[]
};

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function Navbar({ links }: NavbarProps) {
  const pathName = usePathname();

  // remove the "home" link
  const filteredNavLinks = links.filter(link => {
    if(link.pageTitle !== "Home"){
      return link;
    };
  });

  // for every slug, in the "filteredNavLinks" array, create a link
  const navLinks = filteredNavLinks.map((slug: Slug) => {
    return (
      <li key={slug.pageTitle}><Link href={slug.link}>{slug.pageTitle}</Link></li>
    );
  });

  return (
    <nav className={pathName === "/" ? "homepage" : "navbar"}>
      <div><Link href="/">Home</Link></div>
      <ul>
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;

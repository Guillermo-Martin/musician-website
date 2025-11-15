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

  // swap the link positions using array destructuring
  [filteredNavLinks[0], filteredNavLinks[1], filteredNavLinks[4], filteredNavLinks[5]] = [filteredNavLinks[1], filteredNavLinks[0], filteredNavLinks[5], filteredNavLinks[4]];

  // for every slug, in the "filteredNavLinks" array, create a link
  const navLinks = filteredNavLinks.map((slug: Slug) => {
    return (
      <li key={slug.pageTitle}><Link href={slug.link}>{slug.pageTitle}</Link></li>
    );
  });

  return (
    <nav className={pathName === "/" ? "homepage" : "navbar"}>
      <div className="w-fit"><Link href="/">Home</Link></div>
      <ul className="w-[80%] flex">
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;

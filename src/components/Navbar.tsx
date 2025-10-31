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

  // for every slug, in the "links" array, create a link
  const navLinks = links.map((slug: Slug) => {
    return (
      <li key={slug.pageTitle}><Link href={slug.link}>{slug.pageTitle}</Link></li>
    );
  });

  return (
    <nav className={pathName === "/" ? "homepage" : "navbar"}>
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default Navbar;

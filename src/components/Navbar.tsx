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
// const NAVBAR_STYLES = "navbar py-12 flex justify-between hidden sm:inline-block";
const NAVBAR_STYLES = "navbar py-12 justify-between hidden custom-md-nav:flex";

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
      <li key={slug.pageTitle}><Link href={slug.link} className="hover:underline">{slug.pageTitle}</Link></li>
    );
  });

  return (
    <div>
      {/* at 640 and up this is visible */}
      <nav className={pathName === "/" ? "homepage" : NAVBAR_STYLES}>
        <div className="w-fit"><Link href="/" className="hover:underline">Home</Link></div>
        <ul className="w-[80%] flex justify-end gap-12">
          {navLinks}
        </ul>
      </nav>

      {/* at 640px and up, this is hidden */}
      <nav className="navbar-mobile custom-md-nav:hidden">
        <div>
          {/* Hamburger icon: https://css-tricks.com/snippets/svg/svg-hamburger-menu/ */}
          <svg viewBox="0 0 100 80" width="32" height="32">
            <rect width="80" height="5"></rect>
            <rect y="30" width="80" height="5"></rect>
            <rect y="60" width="80" height="5"></rect>
          </svg>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;

// TODO: ADD HAMBURGER MENU FUNCTIONALITY FOR MOBILE
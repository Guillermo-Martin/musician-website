"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
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
  const [ mobileLinks, setMobileLinks ] = useState(false);
  const [ closeIconShowing, setCloseIconShowing ] = useState(false)
  const pathName = usePathname();

  // mobile nav
  const handleClick = () => {
    // toggle between showing and hiding the mobile nav and the hamburger icon and close icon
    setMobileLinks(!mobileLinks);
    setCloseIconShowing(!closeIconShowing);

    // if the mobile menu is open (mobileLinks === true), prevent the user from scrolling
    if(!mobileLinks){
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    };
  };

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
      <li key={slug.pageTitle}><Link href={slug.link} className="hover:underline" onClick={handleClick}>{slug.pageTitle}</Link></li>
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
      {/* <nav className="navbar-mobile py-12 custom-md-nav:hidden"> */}
      {/* <nav className=""> */}
        {/* <div className="flex justify-end relative"> */}
        <div className="navbar-mobile px-4 py-6 flex justify-end custom-md-nav:hidden">
          {/* Hamburger icon: https://css-tricks.com/snippets/svg/svg-hamburger-menu/ */}
          {/* Close icon: if "closeIconShowing" is "true", add the "open" class */}
          <svg viewBox="0 0 80 80" width="32" height="32" className={`hamburger-icon ${closeIconShowing ? "open" : ""}`} onClick={handleClick}>
            <rect width="80" height="5" className="top"></rect>
            <rect y="30" width="80" height="5" className="middle"></rect>
            <rect y="60" width="80" height="5" className="bottom"></rect>
          </svg>          
        </div>

        {/* Conditionally show all the mobile nav links */}
        {
          mobileLinks 
            ? 
              <nav className="mobile-links-container absolute w-full h-screen bg-white">
                <ul className="mobile-links navbar-mobile h-full px-4 py-12 flex flex-col gap-4">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  {navLinks}
                </ul>
              </nav>
            : 
              null
        }
      {/* </nav> */}
    </div>
  );
};

export default Navbar;

// TODO: ADD HAMBURGER MENU FUNCTIONALITY FOR MOBILE
// - X losing the nav when the hamburger menu is closed
// - get the hamburger menu to change to an X
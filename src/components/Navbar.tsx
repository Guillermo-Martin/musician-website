import Link from "next/link";
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
  // for every slug, in the "links" array, create a link
  const navLinks = links.map((slug: Slug) => {
    return (
      <li key={slug.page_title}><Link href={slug.slug.current}>{slug.page_title}</Link></li>
    );
  });

  return (
    <nav>
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default Navbar;

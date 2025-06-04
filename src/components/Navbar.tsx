import Link from "next/link";

interface Slug {
  page_title: string;
  slug: {
    current: string;
  }
};

interface NavbarProps {
  // links is going to be an array of objects
  links: Slug[]
}

function Navbar({ links }: NavbarProps) {
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

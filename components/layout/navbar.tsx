"use client";

import Link from "next/link";
import MobileNav from "./mobile-nav";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  return (
    <header
      className="top-0 z-40 flex  flex-row mx-auto w-full md:backdrop-blur-sm"
      id="header"
    >
      <div className="py-4 px-4 mx-auto w-full  md:flex md:justify-between max-w-8xl md:px-4">
        <div className="flex flex-row-reverse">
          <div className="md:hidden">
            <MobileNav links={links} />
          </div>
        </div>
        <nav
          className="items-center w-full md:w-auto hidden md:flex h-screen md:h-auto "
          aria-label="Main navigation"
        >
          <ul className="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto text-xl md:text-md font-extrabold text-theme-primary">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="px-5 py-3 flex items-center 
                  hover:scale-105  hover:text-theme-secondary  transition-all  duration-200 ease-in-out
                  "
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

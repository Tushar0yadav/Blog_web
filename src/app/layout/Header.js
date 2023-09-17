import Link from "next/link";
import React from "react";

const All = "mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]";
const Header = () => {
  return (
    <header className="text-bold bg-blue-100 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-bold mb-4 md:mb-0">
          <span className="ml-3 text-xl">Techblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className={All}
            href="/"
          >
            Home
          </Link>
          <Link
            className={All}
            href="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className={All}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={All}
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

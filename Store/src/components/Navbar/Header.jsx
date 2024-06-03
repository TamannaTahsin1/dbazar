"use client";
import Container from "@/components/Container/Container";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropDownCategoryMenu from "./DropDownCategoryMenu";

const navLinks = ["Categories", "About Us", "Contact Us", "Checkout", "Offers"];
const Links = [
  { name: "Privacy Policy", link: "privacy" },
  { name: "Terms & Conditions", link: "conditions" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [CategoryOpen, setCategoryOpen] = useState(false);
  const categoryDropdown = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const close = (e) => {
      if (
        categoryDropdown.current &&
        !categoryDropdown.current.contains(e.target)
      ) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <Container>
      <div className="items-center justify-between py-2 lg:flex">
        {/* sidebar menu */}
        <div className="lg:hidden">
          <button
            className="p-2 text-black focus:bg-white focus:outline-none"
            onClick={(e) => {
              toggleMenu();
              e.stopPropagation();
            }}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M19 12H5a1 1 0 010-2h14a1 1 0 010 2zM3 5a1 1 0 110-2h18a1 1 0 110 2H3zM21 19a1 1 0 110-2H3a1 1 0 110 2h18z" />
              ) : (
                <path d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zM4 12h16a1 1 0 010 2H4a1 1 0 010-2zM4 18h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute left-10 top-12 z-50  w-[200px] overflow-hidden rounded-xl bg-white px-4 text-sm shadow-md ">
              {/* side menu items */}
              <ul>
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.replace(/\s+/g, "").toLowerCase()}
                    className="my-6 cursor-pointer text-base md:my-4 md:ml-3"
                  >
                    {navLink === "Categories" ? (
                      <div className="text-gray-800 duration-500 hover:text-gray-400">
                        {navLink}
                      </div>
                    ) : (
                      <Link
                        href={`/${navLink.replace(/\s+/g, "").toLowerCase()}`}
                        className="text-gray-800 duration-500 hover:text-gray-400"
                      >
                        {navLink}
                      </Link>
                    )}
                  </li>
                ))}
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="my-6 text-base md:my-4 md:ml-3"
                  >
                    <Link
                      href={link.link}
                      className="text-gray-800 duration-500 hover:text-gray-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* main menu */}
        <ul className="hidden cursor-pointer items-center justify-around gap-3 lg:flex lg:gap-5">
          {navLinks.map((navLink, i) => (
            <li key={i} className={`relative hover:text-primary`}>
              <div>
                {navLink === "Categories" ? (
                  <div ref={categoryDropdown}>
                    <span
                      className="flex h-full w-full items-center gap-1 py-2"
                      onClick={(e) => {
                        setCategoryOpen((prev) => !prev);
                        e.stopPropagation();
                      }}
                    >
                      {navLink}
                      <FaChevronDown
                        className={`${CategoryOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                    <DropDownCategoryMenu CategoryOpen={CategoryOpen} />
                  </div>
                ) : (
                  <Link
                    href={`/${navLink.replace(/\s+/g, "").toLowerCase()}`}
                    className="inline-block h-full w-full py-2"
                  >
                    {navLink}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center justify-around gap-3 text-xs lg:flex">
          {Links.map((link, i) => (
            <li key={i} className="my-7 md:my-0 md:ml-4">
              <Link
                href={link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

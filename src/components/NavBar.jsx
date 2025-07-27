import React, { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full flex-center fixed z-50 top-5 left-0 transition-all duration-500 ease-in-out
      ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      <div
        className="container mx-auto flex items-center justify-center 
        bg-[#16032fcc] backdrop-blur-md shadow-lg px-3 py-3 rounded-full
        border border-gray-700 md:my-4 my-2 transition-all duration-300"
      >
        <div className="md:flex items-center gap-7 hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
                after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

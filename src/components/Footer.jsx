import React from "react";
import { footerIconsList } from "../constants"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300/30 py-10">
      <div className="flex justify-center gap-6 text-xl mb-4">
        {footerIconsList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>
        ))}
      </div>
      <p className="text-sm">
        &copy; 2025 Saurav Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

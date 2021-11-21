import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const navitems = [
  { label: "Home", to: "/" },
  { label: "Destination", to: "/destination" },
  { label: "Crew", to: "/crew" },
  { label: "Technology", to: "/technology" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex w-full justify-between fixed">
      <div className="w-1/3 mt-8 sm:w-1/2 md:w-1/2 lg:w-full lg:mt-8 flex items-center justify-items-start">
        <div className="pl-10">
          <img src="/logos/logo.svg" />
        </div>
        <div className="border-gray-500 border-b w-full ml-10 -mr-6 z-30 hidden sm:hidden md:hidden lg:block"></div>
      </div>
      <div className="bg-white hidden sm:block w-full lg:mt-8 z-10 bg-opacity-10 h-24 backdrop-filter backdrop-blur-lg rounded-sm shadow-2xl">
        <div className="flex justify-evenly h-full items-center">
          {navitems.map((item, idx) => (
            <div key={idx} className="border-b-4 text-center h-full">
              <span className="flex flex-col justify-center h-full whitespace-nowrap">
                <Link key={item.label} to={item.to}>
                  <div>
                    <span className="font-bold font-mono text-white text-lg">
                      0{idx}
                    </span>{" "}
                    <span className="font-light text-white text-lg">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="block mt-8 sm:hidden pr-10">
        {menuOpen && (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {" "}
            <img src="/logos/icon-close.svg" />
          </button>
        )}
        {!menuOpen && (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {" "}
            <img src="/logos/icon-hamburger.svg" />
          </button>
        )}
      </div>
      {menuOpen && (
        <div className="block sm:hidden fixed top-16 bg-white w-1/2 right-4 bg-opacity-10 backdrop-filter backdrop-blur-lg">
          <div className="flex flex-col items-center text-white py-12">
            {navitems.map((item, idx) => (
              <Link key={idx} to={item.to}>
                <div className="py-4">
                  <span className="font-bold font-mono text-white text-xl">
                    0{idx}
                  </span>{" "}
                  <span className="font-light text-white text-xl">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

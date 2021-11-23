import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-3xl home-bg-img-desktop bg-center bg-fixed">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly items-center h-full w-full text-white">
        <div className="flex flex-col w-9/12 lg:w-1/2">
          <div className="font-thin text-lg text-center lg:text-justify sm:text-4xl text-gray-400">
            so, you want to travel to
          </div>
          <div className="font-thin text-4xl text-center sm:text-9xl lg:text-justify">
            S P A C E
          </div>
          <div className="font-thin text-center lg:text-justify text-lg sm:text-2xl text-gray-400">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition transform ease-in-out duration-500 rounded-full bg-none h-48 w-48 sm:h-96 sm:w-96 hover:bg-white hover:bg-opacity-25">
          <div className="bg-white text-black text-lg sm:text-2xl h-32 w-32 sm:h-64 sm:w-64 rounded-full text-center flex flex-col justify-center items-center uppercase font-serif">
            <Link to={"/destination"}>explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

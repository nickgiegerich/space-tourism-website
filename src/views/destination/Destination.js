import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/layout/PageTitle";

const planets = [
  {
    name: "moon",
    descr:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    img: "/planets/image-moon.png",
  },
  {
    name: "mars",
    descr:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
    img: "/planets/image-mars.png",
  },
  {
    name: "europa",
    descr:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
    img: "/planets/image-europa.png",
  },
  {
    name: "titan",
    descr:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    img: "/planets/image-titan.png",
  },
];

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState(0);
  return (
    <div className="destination-bg-img bg-center bg-fixed">
      <div className="flex flex-col h-full justify-evenly">
        <div >
          <PageTitle number={"01"} title={"pick your destination"} />
        </div>
        <div className="flex flex-col lg:flex-row h-1/2 w-full justify-center">
          <div className="flex flex-col lg:flex-row w-full justify-evenly items-center">
            <div className="flex flex-col justify-center">
              <img
                className="h-1/2 lg:h-full py-10"
                src={planets[currentPlanet].img}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-evenly h-1/4 items-center">
                {planets.map((planet, idx) => (
                  <div
                    key={idx}
                    className="border-b-2 text-center h-full lg:mx-4"
                  >
                    <div className="flex flex-col justify-center h-full whitespace-nowrap">
                      <button onClick={() => setCurrentPlanet(idx)}>
                        <div className="text-gray-400 uppercase font-light text-2xl">
                          {planet.name}
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-gray-200 font-thin text-2xl text-center lg:text-8xl lg:text-justify uppercase pt-5">
                {planets[currentPlanet].name}
              </div>
              <div className="text-gray-400 text-center text-md max-w-xs lg:text-justify lg:text-2xl pt-12 lg:max-w-md">
                {planets[currentPlanet].descr}
              </div>
              <div className="w-full border-b-2 pt-8 border-gray-500"></div>
              <div className="flex w-full justify-evenly text-gray-400 pb-10">
                <div className="flex flex-col">
                  <div className="uppercase font-extralight text-xl pt-5">
                    avg. distance
                  </div>
                  <div className="uppercase font-light text-gray-200 text-xl lg:text-3xl">
                    {planets[currentPlanet].distance}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="uppercase font-extralight text-xl pt-5">
                    est. travel time
                  </div>
                  <div className="uppercase font-light text-gray-200 text-xl lg:text-3xl">
                    {" "}
                    {planets[currentPlanet].travelTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

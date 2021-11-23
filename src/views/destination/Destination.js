import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState(0);

  const getData = async () => {
    const res = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setData(data.destinations);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="destination-bg z-50">
      <div className="main md:flex-col lg:inline-block lg:max-w-full">
        <div className="x-0 max-w-full lg:mx-auto lg:max-w-full ">
          <div className="pb-10 lg:pb-44 text-center sm:text-justify md:ml-10">
            <PageTitle number={"01"} title={"pick your destination"} />
          </div>
          {data.map((planet, idx) =>
            currentPlanet === idx ? (
              <div key={idx} className="lg:flex lg:justify-evenly">
                <div className="lg:w-1/2 md:ml-10 block pb-14">
                  <img
                    className="m-auto w-1/3 lg:w-auto"
                    alt="Planet Image"
                    src={planet.images.png}
                  />
                </div>
                <div className="md:w-full lg:w-1/2">
                  <div className="flex justify-center lg:justify-start">
                    {data.map((planet, idx) => (
                      <button
                        key={`planet-${idx}`}
                        className={`transition mx-auto lg:m-0 lg:mr-10 border-b-2 ${
                          currentPlanet === idx
                            ? "border-b-2"
                            : "border-transparent hover:border-gray-500"
                        }`}
                        onClick={() => setCurrentPlanet(idx)}
                      >
                        <div className="text-gray-400 uppercase font-light text-2xl">
                          {planet.name}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="text-gray-200 font-thin text-4xl text-center lg:text-8xl lg:text-justify uppercase pt-9">
                    {planet.name}
                  </div>
                  <div className="text-gray-400 text-center mx-auto text-md max-w-lg pt-5 lg:mx-0 lg:text-justify lg:text-2xl lg:max-w-md">
                    {planet.description}
                  </div>
                  <div className="w-1/2 mx-auto lg:mx-0 border-b-2 pt-8 border-gray-500"></div>
                  <div className="flex w-full lg:w-1/2 justify-evenly lg:justify-start text-gray-400 pb-10">
                    <div className="flex flex-col mr-16">
                      <div className="uppercase font-extralight text-xl pt-5">
                        avg. distance
                      </div>
                      <div className="uppercase font-light text-gray-200 text-xl lg:text-3xl">
                        {planet.distance}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="uppercase font-extralight text-xl pt-5">
                        est. travel time
                      </div>
                      <div className="uppercase font-light text-gray-200 text-xl lg:text-3xl">
                        {" "}
                        {planet.travel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <> </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;

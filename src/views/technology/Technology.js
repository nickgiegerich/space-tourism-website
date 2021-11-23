import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";
import TechInfo from "./TechInfo";
import TechSelector from "./TechSelector";

const Technology = () => {
  const [data, setData] = useState([]);
  const [techIndex, setTechIndex] = useState(0);

  const getData = async () => {
    const res = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setData(data.technology);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="tech-bg z-50">
      <div className="main md:flex-col lg:inline-block">
        <div className="mx-0 max-w-full lg:mx-auto lg:max-w-4xl">
          <div className="pb-10 lg:pb-44 text-center sm:text-justify md:ml-10">
            <PageTitle number={"03"} title={"space launch 101"} />
          </div>
          {data.map((tech, idx) =>
            techIndex === idx ? (
              <div key={idx} className="lg:flex lg:justify-evenly">
                <div className="w-full block pb-14 lg:hidden">
                  <img
                    alt="Landscape"
                    className="w-full"
                    src={tech.images.landscape}
                  />
                </div>
                <div className="w-full flex justify-center pb-14 lg:w-1/4 lg:block text-white">
                  {data.map((_, idx) => (
                    <TechSelector
                      key={idx}
                      techIndex={techIndex}
                      idx={idx}
                      setTechIndex={setTechIndex}
                    />
                  ))}
                </div>
                <div className="lg:w-2/3 lg:block">
                  <TechInfo name={tech.name} description={tech.description} />
                </div>
                <div className="lg:w-1/4 xl:w-1/3 hidden lg:block lg:absolute right-0 bottom-28">
                  <img
                    alt="Portrait"
                    className="w-full"
                    src={tech.images.portrait}
                  />
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;

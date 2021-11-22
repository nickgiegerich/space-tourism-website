import { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import CrewInfo from "./CrewInfo";
import CrewSelector from "./CrewSelector";

const Crew = () => {
  const [data, setData] = useState([]);
  const [crewIndex, setCrewIndex] = useState(0);

  const getData = async () => {
    const res = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setData(data.crew);
    return { payload: data.crew };
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="crew-bg z-50">
      <div className="main md:flex-col lg:inline-block">
        <div className="mx-auto max-w-4xl">
          <div className="md:pb-10 lg:pb-44">
          
            <PageTitle number={"02"} title={"meet your crew"} />
          </div>
          <div className=" md:pb-0 lg:pb-28">
            <CrewInfo />
          </div>
          <div className="md:text-center lg:text-justify">
            <CrewSelector />
            <CrewSelector />
            <CrewSelector />
            <CrewSelector />
            
          </div>
        </div>
        <div className="md:block lg:absolute lg:bottom-0 lg:right-14">
          <img
            className="md:m-auto lg:mx-0"
            alt="Crew Member"
            src="/assets/crew/image-douglas-hurley.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;

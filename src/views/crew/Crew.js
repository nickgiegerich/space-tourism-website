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
    <div className="crew-bg">
      <div className="main">
        <div className="mx-auto max-w-4xl">
          <PageTitle number={"02"} title={"meet your crew"} />
          <CrewInfo />
          <CrewSelector />
          <CrewSelector />
          <CrewSelector />
          <CrewSelector />
        </div>
        <div className="crew-img">
          <img alt="Crew Member" src="/assets/crew/image-douglas-hurley.png" />
        </div>
      </div>

      {/* <div className="crew-container">
        <div className="">
          <PageTitle number={"02"} title={"meet your crew"} />
          <div className="pt-24">
            <CrewInfo />
            <CrewSelector />
            <CrewSelector />
            <CrewSelector />
            <CrewSelector />
          </div>
          <div className="absolute bottom-0 right-2.5">
            <img
              className=" mx-auto md:mx-auto md:w-1/3 lg:w-auto"
              src="/assets/crew/image-douglas-hurley.png"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Crew;

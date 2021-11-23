import { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import CrewInfo from "./CrewInfo";
import CrewSelector from "./CrewSelector";

const Crew = () => {
  const [data, setData] = useState([]);
  const [crewIndex, setCrewIndex] = useState(2);

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
        <div className="mx-auto max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-4xl">
          <div className="pb-10 lg:pb-44 text-center sm:text-justify">
            <PageTitle number={"02"} title={"meet your crew"} />
          </div>
          {data.map((member, idx) =>
            crewIndex === idx ? (
              <div key={idx}>
                <div className="block sm:hidden">
                  <img
                    className="m-auto w-1/2"
                    alt="Crew Member"
                    src={member.images.png}
                  />
                </div>
                <div className="block sm:hidden text-center lg:text-justify">
                  {data.map((_, idx) => (
                    <CrewSelector key={idx} idx={idx} crewIndex={crewIndex} setCrewIndex={setCrewIndex}  />
                  ))}
                </div>
                <div className="md:pb-0 lg:pb-28">
                  <CrewInfo
                    role={member.role}
                    name={member.name}
                    bio={member.bio}
                  />
                </div>
                <div className="hidden sm:block text-center lg:text-justify">
                  {data.map((_, idx) => (
                    <CrewSelector key={idx} idx={idx} crewIndex={crewIndex} setCrewIndex={setCrewIndex}/>
                  ))}
                </div>
                <div className="hidden sm:block lg:absolute lg:bottom-0 lg:right-14">
                  <img
                    className="m-auto lg:mx-0"
                    alt="Crew Member"
                    src={member.images.png}
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

export default Crew;

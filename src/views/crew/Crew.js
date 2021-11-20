import { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

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
    <div className="crew-bg-img bg-center bg-fixed">
      <PageTitle number={"02"} title={"meet your crew"} />

      <div className="flex md:flex-col lg:flex-row justify-start items-center">
        {/* LEFT COLUMN */}
        <div className="flex-col justify-start">
          {/* INFO COMPONENT */}
          <div className=" flex flex-col md:justify-center md:w-full lg:ml-44">
            <div className="text-gray-500  uppercase font-light text-4xl ">
              ROLE
            </div>
            <div className="text-gray-200  uppercase font-thin text-6xl lg:text-8xl pb-10">
              NAME
            </div>
            <div className="max-w-xs  md:max-w-md lg:max-w-xl text-gray-400 lg:text-2xl">
              BIO
            </div>
          </div>

          {/* BUILD CIRCLE NAV COMPONENT */}
          <div className="flex justify-start md:w-full lg:ml-44">
            <button className="rounded-full h-5 w-5 my-5 mr-5 bg-gray-600"></button>
            <button className="rounded-full h-5 w-5 m-5 bg-gray-600"></button>
            <button className="rounded-full h-5 w-5 m-5 bg-gray-600"></button>
            <button className="rounded-full h-5 w-5 m-5 bg-gray-600"></button>
          </div>
        </div>
        <div className="flex w-full h-full justify-center items-end">
          <img src="/assets/crew/image-douglas-hurley.png" />
        </div>
      </div>

      {/* CREW MEMBER IMAGE */}

      {/* <div className="flex justify-evenly w-full lg:w-full lg:justify-evenly -mt-32 md:-mt-56 lg:mt-0 pl-3 ">
          {data.map((member, idx) =>
            idx === crewIndex ? (
              <div key={`crew-${idx}`}>
                <div className="text-gray-500  uppercase font-light text-4xl pb-5  lg:text-justify">
                  {member.role}
                </div>
                <div className="text-gray-200  uppercase font-thin text-4xl lg:text-8xl pb-10 lg:text-justify">
                  {member.name}
                </div>
                <div className="max-w-xs  md:max-w-md lg:max-w-xl text-gray-400 lg:text-2xl  lg:text-justify">
                  {member.bio}
                </div>
                <div className="flex justify-evenly w-full mt-5 lg:w-1/2">
                  {data.map((member, idx) => (
                    <button
                      key={`button-${idx}`}
                      onClick={() => setCrewIndex(idx)}
                    >
                      <div
                        className={`relative lg:absolute lg:bottom-11 rounded-full h-5 w-5  ${
                          idx === crewIndex ? "bg-gray-200" : "bg-gray-600"
                        } `}
                      ></div>
                    </button>
                  ))}
                </div>
                <div className="flex flex-col w-full h-full justify-end items-center">
                  <div>
                    <img src={member.images.png} />
                  </div>
                </div>
              </div>
            ) : (
              <div key={idx}></div>
            )
          )}
        </div> */}
    </div>
  );
};

export default Crew;

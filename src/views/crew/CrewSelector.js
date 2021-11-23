const CrewSelector = ({ crewIndex, idx, setCrewIndex }) => {
  return (
    <>
      <button
        onClick={() => setCrewIndex(idx)}
        className={`rounded-full h-5 w-5 my-5 mr-5 transition hover:bg-gray-200 ${
          crewIndex === idx ? "bg-gray-200" : "bg-gray-600"
        }`}
      ></button>
    </>
  );
};

export default CrewSelector;

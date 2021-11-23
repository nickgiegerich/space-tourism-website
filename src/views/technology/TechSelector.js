const TechSelector = ({ techIndex, idx, setTechIndex }) => {
    return (
      <div className="mx-5">
        <button
          onClick={() => setTechIndex(idx)}
          className={`rounded-full h-14 w-14 sm:h-24 sm:w-24 my-2 text-4xl font-thin border border-gray-500 transition hover:bg-gray-200 hover:text-gray-800 ${
            techIndex === idx ? "bg-gray-200 text-gray-800" : "bg-none"
          }`}
        >{parseInt(idx) + 1}</button>
      </div>
    );
  };
  
  export default TechSelector;
  
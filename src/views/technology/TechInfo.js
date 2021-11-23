const TechInfo = ({name, description}) => {
    return (
      <>
        <div className="text-gray-400 uppercase font-light text-2xl text-center lg:text-justify">
          the terminology . . .
        </div>
        <div className="text-gray-200  uppercase font-thin text-6xl lg:text-6xl text-center lg:text-justify">
          {name}
        </div>
        <div className="text-gray-400 max-w-lg mx-auto lg:text-2xl lg:max-w-sm xl:max-w-md lg:mx-0 text-center lg:text-justify">
          {description}
        </div>
      </>
    );
  };
  
  export default TechInfo;
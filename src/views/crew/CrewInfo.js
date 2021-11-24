const CrewInfo = ({role, name, bio}) => {
  return (
    <>
      <div className="text-gray-500 uppercase font-light text-4xl text-center lg:text-justify">
        {role}
      </div>
      <div className="text-gray-200  uppercase font-thin text-4xl lg:text-6xl text-center lg:text-justify">
        {name}
      </div>
      <div className="text-gray-400 max-w-md mx-auto lg:text-2xl lg:max-w-md lg:mx-0 text-center lg:text-justify">
        {bio}
      </div>
    </>
  );
};

export default CrewInfo;

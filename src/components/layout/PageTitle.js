const PageTitle = ({ number, title }) => {
  return (
    <div className="flex justify-center mt-28 md:justify-start md:m-28 lg:ml-44">
      <span className="text-gray-500 font-thin text-xl sm:text-4xl uppercase pr-3">
        {number}
      </span>
      <span className="text-gray-200 font-thin text-xl sm:text-4xl uppercase">
        {title}
      </span>
    </div>
  );
};

export default PageTitle;

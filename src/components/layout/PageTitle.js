const PageTitle = ({ number, title }) => {
  return (
    <div>
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

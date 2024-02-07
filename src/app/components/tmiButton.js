import React from "react";

const tmiButton = () => {
  return (
    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded  group">
      {/* purple box */}
      <span className="w-0 h-0 rounded bg-[#FF6600] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
      <span className="p-2 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10">
      sdkjfksdjf
      </span>
    </button>
  );
};

export default tmiButton;

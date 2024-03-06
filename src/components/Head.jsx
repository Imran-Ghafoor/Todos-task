import React from "react";

const Head = ({ tittle, para }) => {
  return (
    <>
      <div className="h-full w-full grid justify-items-center ">
        <div className=" h-28 w-[370px] items-start text-white mt-2 bg-gray-900 rounded-lg shadow-xl shadow-red-500 hover:shadow-white ">
          <span className="text-[80px] -mt-2 text-center flex items-center justify-center mb-2 ">
            💀
          </span>

          <div className=" flex flex-col items-center content-center">
            <h1 className="text-4xl font-bold ">{tittle}</h1>
            <small className="p-1">{para}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;

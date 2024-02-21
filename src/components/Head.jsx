import React from "react";

const Head = ({ tittle, para }) => {
  return (
    <>
      <div className="h-full w-full  flex justify-center">
        <div className=" h-28 max-w-[450px]  flex flex-row justify-center items-center text-white mt-2 bg-gray-900 rounded-lg shadow-lg shadow-white hover:shadow-green-500">
          <span className="text-[70px] -mt-3 ">💀</span>

          <div className=" flex flex-col items-center">
            <h1 className="text-4xl font-semibold p-2 ">{tittle}</h1>
            <small className="">{para}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;

import React from "react";
import { FaSkullCrossbones } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";

const Task = ({ title, removeEle }) => {
  return (
    <div className="flex  justify-center text-blue-900 font-semibold">
      <div className="min-w-[450px] flex justify-between mt-10 bg-green-500 p-3 rounded-lg">
        <h2 className=" text-2xl ">{title}</h2>

        <div className="flex flex-row items-center space-x-5">
          <span onClick={removeEle} className="flex justify-end">
            <FaSkullCrossbones size={25} color="white" />
          </span>
          <span>
            <FaUserCheck size={25} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;

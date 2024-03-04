import React from "react";
import { FaSkullCrossbones } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";

const Task = ({ title, removeEle, isCompleted, makeCompleted }) => {
  return (
    <div className="flex  justify-center text-blue-900 font-semibold">
      <div className="min-w-[450px] flex justify-between mt-10 bg-yellow-500 p-3 rounded-lg">
        <h2 className=" text-3xl line-through ">
          {isCompleted ? "yes" : "no"} {title}
        </h2>

        <div className="flex flex-row items-center space-x-5">
          <span
            onClick={removeEle}
            className="flex justify-end hover:bg-red-600 border-none cursor-pointer"
          >
            <FaSkullCrossbones size={25} color="white" />
          </span>
          <span
            onClick={makeCompleted}
            className="hover:bg-green-600 cursor-pointer"
          >
            <FaUserCheck size={25} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;

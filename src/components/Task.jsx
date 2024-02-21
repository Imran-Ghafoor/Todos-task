import React from "react";
import { FaSkullCrossbones } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";

const Task = () => {
  return (
    <div className="flex  justify-center">
      <div className="min-w-[450px] flex justify-between mt-16 text-white bg-green-500 p-3 rounded-lg">
        <h2 className=" text-2xl ">Enter the new task</h2>

        <div className="flex flex-row items-center space-x-5">
          <span className="flex justify-end">
            <FaSkullCrossbones size={25} />
          </span>
          <span>
            <FaUserCheck size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;

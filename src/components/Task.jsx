import { FaSkullCrossbones } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import React from "react";

const Task = ({
  title,
  removeEle,
  isCompleted,
  makeCompleted,
  clickItem,
  updateItem,
}) => {
  return (
    <div
      onClick={clickItem}
      className="flex justify-center items-center text-blue-900 font-semibold text-2xl "
    >
      <div className="min-w-[350px] sm:w-[550px] flex justify-between items-center mt-10 bg-yellow-500 p-3 rounded-lg">
        <h2 className={isCompleted ? "line-through text-red-500" : ""}>
          {title}
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
          <button onClick={updateItem}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Task;

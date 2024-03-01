import React from "react";
import { useState } from "react";

const InputForm = ({ addEleIntoList }) => {
  const [inputValue, setInputValue] = useState("");

  const emptyTodo = () => {
    if (todos === " ") {
      console.log("todo is empty");
    } else inputValue;
  };
  return (
    <div className="flex justify-center items-center mt-12">
      <input
        className="rounded-lg text-start font-semibold text-blue-900 h-10 p-2 hover:scale-105 border-none text-xl"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Please enter your todo"
      />
      <button
        className="text-white mx-4 bg-gray-700 shadow-md shadow-gray-500 rounded-md p-1 font-bold hover:bg-green-500 "
        onClick={() => addEleIntoList(inputValue)}
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputForm;

import React from "react";

const InputForm = ({ addEleIntoList, inputValue, setInputValue }) => {
  return (
    <div className="grid justify-items-center gap-2 mt-24 mx-auto">
      <input
        className="rounded-lg text-start font-semibold text-blue-900 h-10 p-2 hover:scale-105 border-none text-xl"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Please enter your todo"
      />
      <button
        className="text-gray-300 mx-4 bg-gray-700 shadow-md shadow-gray-500 rounded-md p-1 font-bold hover:bg-green-500 w-32 "
        onClick={() => addEleIntoList(inputValue)}
      >
        Add OR Update
      </button>
    </div>
  );
};

export default InputForm;

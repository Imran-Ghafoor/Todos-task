import { useState } from "react";
import Head from "./components/Head";
import Task from "./components/Task";
import React from "react";

function App() {
  const data = [
    {
      id: 1,
      title: "Im done with react",
    },
    {
      id: 2,
      title: "I know about react",
    },
    {
      id: 3,
      title: "Do you like tailwind",
    },
  ];
  const [list, setList] = useState(data);

  let newEle = {
    id: 5,
    title: "ok ok this one is added",
  };

  const addEleIntoList = () => {
    let newArr = [...list, newEle];
    setList(newArr);
  };
  const deleteEle = (x) => {
    setList(list.filter((e) => e.id !== x));
  };
  return (
    <div>
      <Head
        tittle={"ToDo App with Hadi"}
        para={"Hi, Im ToDo Let's Fun With me!"}
      />
      <button
        onClick={addEleIntoList}
        className="flex flex-col justify-center items-center text-center text-white "
      >
        Add Task
      </button>
      {list.map((x, index) => (
        <React.Fragment key={index}>
          <Task title={x.title} removeEle={() => deleteEle(x.id)} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;

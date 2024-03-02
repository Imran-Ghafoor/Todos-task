import { useState } from "react";
import Head from "./components/Head";
import Task from "./components/Task";
import React from "react";
import InputForm from "./components/InputForm";

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
  const [list, setList] = useState([]);

  // let newEle = {
  //   id: 5,
  //   title: "ok ok this one is added",
  // };

  const addEleIntoList = (todos, homework) => {
    const myDate = new Date();

    let myNewObj = {
      id: myDate,
      title: todos,
      isCompleted: true,
    };

    let newArr = [...list, myNewObj];
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
      <InputForm addEleIntoList={addEleIntoList} />
      {list.map((x, index) => (
        <React.Fragment key={index}>
          <Task
            title={x.title}
            isCompleted={x.isCompleted}
            removeEle={() => deleteEle(x.id)}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;

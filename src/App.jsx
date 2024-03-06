import { useState } from "react";
import Head from "./components/Head";
import Task from "./components/Task";
import InputForm from "./components/InputForm";
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
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addEleIntoList = (todos) => {
    const myDate = new Date();

    let myNewObj = {
      id: myDate,
      title: todos,
      isCompleted: false,
    };

    let newArr = [...list, myNewObj];
    setList(newArr);
    setInputValue("");
  };
  const deleteEle = (x) => {
    setList(list.filter((e) => e.id !== x));
  };

  const makeCompleted = (x) => {
    // alert(x);
    // iterate array
    const updatedList = list.map((i) => {
      if (i.id === x) {
        return { ...i, isCompleted: true };
      } else {
        return { ...i };
      }
    });
    setList(updatedList);
  };
  const clickItem = (item) => {
    setInputValue(item.title);
  };

  const updateItem = (x) => {
    const updatedList = list.map((i) => {
      if (i.id === x) {
        return { ...i, title: inputValue };
      } else {
        return { ...i };
      }
    });
    setList(updatedList);
    setInputValue("");
  };

  return (
    <div className="">
      <Head
        tittle={"ToDo App with Hadi"}
        para={"Hi, Im ToDo Let's Fun With me!"}
      />
      <InputForm
        addEleIntoList={addEleIntoList}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {list.map((x, index) => (
        <React.Fragment key={index}>
          <Task
            updateItem={() => updateItem(x.id)}
            clickItem={() => clickItem(x)}
            title={x.title}
            isCompleted={x.isCompleted}
            makeCompleted={() => makeCompleted(x.id)}
            removeEle={() => deleteEle(x.id)}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;

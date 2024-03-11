import { useEffect, useState } from "react";
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
  const [darkMode, SetDarkMode] = useState(false);

  useEffect(() => {
    let mode = darkMode ? "dark" : "light";
    document.documentElement.classList.toggle(mode);
  }, [darkMode]);

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
    localStorage.setItem("list", JSON.stringify(newArr));
  };
  const deleteEle = (x) => {
    let updated = list.filter((e) => e.id !== x);
    setList(updated);

    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(updated));
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
    localStorage.removeItem("list");
    localStorage.setItem("item", JSON.stringify(updatedList));
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
    localStorage.removeItem(list);
    localStorage.getItem(list, JSON.stringify(updatedList));
  };

  return (
    <div>
      <button
        onClick={() => {
          SetDarkMode(!darkMode);
        }}
        className="bg-black dark:bg-black absolute right-10 top-10 text-white"
      >
        {!darkMode ? "Light" : "Dark"}
        Dark Mode
      </button>
      <div>
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
    </div>
  );
}

export default App;

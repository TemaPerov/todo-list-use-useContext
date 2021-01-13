import Input from "./input/Input";
import List from "./list/LIst";
import Title from "./title/Title";
import "./app.css";
import React, { useState, useEffect, createContext } from "react";
import uuid from "react-uuid";
import { DeleteFunc, EditTask, AddNewTask, ArrForList } from "../state";

//
const App = () => {
  const [arr, setArr] = useState(null);

  const addNewTask = (value, valTitle) => {
    const newObj = {
      id: uuid(),
      text: value,
      title: valTitle,
    };
    console.log(newObj);
    if (arr === null) {
      setArr([newObj]);
    } else setArr([newObj, ...arr]);
  };

  const deletTask = (id) => {
    if (window.confirm("ви хочете видалити?")) {
      const newArr = arr.filter((el) => el.id !== id);
      setArr(newArr);
    }

    // console.log(newArr)
  };

  const editTask = (id) => {
    console.log(id);
  };

  return (
    <div className="main">
      <DeleteFunc.Provider value={deletTask}>
        <EditTask.Provider value={editTask}>
          <AddNewTask.Provider value={addNewTask}>
            <ArrForList.Provider value={arr}>
              <Title />
              <Input />
              <List />
            </ArrForList.Provider>
          </AddNewTask.Provider>
        </EditTask.Provider>
      </DeleteFunc.Provider>
    </div>
  );
};
export default App;

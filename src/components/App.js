import Input from "./input/Input";
import List from "./list/LIst";
import Title from "./title/Title";
import "./app.css";
import React, { useState, useEffect, createContext } from "react";
import uuid from "react-uuid";
import ApTask from "../ApiServer/ApiTask";
import Buttons from "./list/listITem/buttons";
import Search from "./list/listITem/search";
// import DoneArr from "./list/listITem/doneArr";
import {
  DeleteFunc,
  AddNewTask,
  ArrForList,
  NewUpdate,
  NewDoneLine,
  ContextImportant,
  UpdateLine,
  DoneOnly,
  CansleObject,
  ArrNew,
  Found,
} from "../state";

//
const App = () => {
  const [arr, setArr] = useState(null);

  // const [arrFiltrDone, setArrFiltrDone] = useState(null);
  // all, active, done

  // const [stateShowArr, setStateShowArr] = useState("all");
  const [arrState, setArrState] = useState(arr);

  const addNewTask = (value, valTitle) => {
    const newObj = {
      id: uuid(),
      text: value,
      title: valTitle,
      line: false,
    };
    // console.log(newObj);

    if (arr === null) {
      setArr([newObj]);
    } else setArr([newObj, ...arr]);
    new ApTask().addTask(newObj);
    getUpdateDate();
  };

  const updateObj = (id, text) => {
    //знайти індекс
    new ApTask().updateTaskNew(id, { text: text });
    getUpdateDate();

    // const idx = arr.findIndex((el) => el.id === id);
    // // створитиновий об'ект на базі об'екта по знайденому індексу
    // const updObj = {
    //   id: arr[idx].id,
    //   text: text,
    //   title: arr[idx].title,
    //   line: arr[idx].line,
    // };

    // const newArr = [...arr.slice(0, idx), updObj, ...arr.slice(idx + 1)];
    // setArr(newArr);
  };
  //  закреслене лово\\\\\\\\\\
  const updateObjLine = (id, line) => {
    new ApTask().updateTask(id, { line: line });
    getUpdateDate();
  };

  const deletTask = (id) => {
    if (window.confirm("ви хочете видалити?")) {
      // const newArrDone = arr.filter((el) => el.id !== id);
      // setArr(newArrDone);
      new ApTask().removeTask(id);
      getUpdateDate();
    }
  };

  const onlyDoneTasks = () => {
    const doneArr = arr.filter((el) => el.line === true);
    setArrState(doneArr);
    // setStateShowArr('done')
    // console.log(arrState)
  };

  const onliActiveTask = () => {
    const activeArr = arr.filter((el) => el.line !== true);
    setArrState(activeArr);
  };

  const getUpdateDate = async () => {
    let a = await new ApTask().getData();
    setArr(a);
    setArrState(a);
  };

  useEffect(() => {
    getUpdateDate();
  }, []);

  const found = (text) => {
    // return arr;
    // const foundArr = arr.filter((item) => {
    //   return item.text.toLowerCase().indexOf(text.toLowerCase()) > -1;
    // });
    const foundArr = arr.filter((item) => {
      return item.text.toLowerCase().includes(text);
    });

    setArrState(foundArr);
  };

  const arrNew = (obj) => {
    switch (obj) {
      case "all":
        setArrState(arr);
        break;
      case "active":
        setArrState(onliActiveTask);
        break;
      case "done":
        setArrState(onlyDoneTasks);
        break;
    }
  };
  return (
    <div className="main">
      <ArrNew.Provider value={arrNew}>
        {/* <CansleObject.Provider value={cansleObj}> */}
        <DoneOnly.Provider value={onlyDoneTasks}>
          <NewDoneLine.Provider value={updateObjLine}>
            <NewUpdate.Provider value={updateObj}>
              <DeleteFunc.Provider value={deletTask}>
                <Found.Provider value={found}>
                  <AddNewTask.Provider value={addNewTask}>
                    {/* arrState */}
                    <ArrForList.Provider value={arrState}>
                      <Title />
                      <Input />
                      <Search />
                      <Buttons />
                      <List />
                    </ArrForList.Provider>
                  </AddNewTask.Provider>
                </Found.Provider>
              </DeleteFunc.Provider>
            </NewUpdate.Provider>
          </NewDoneLine.Provider>
        </DoneOnly.Provider>
        {/* </CansleObject.Provider> */}
      </ArrNew.Provider>
    </div>
  );
};
export default App;

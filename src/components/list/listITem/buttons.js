import React, { useState, useContext } from "react";
import List from "./../LIst";
import { DoneOnly, ArrForList, ArrNew } from "./../../../state";
// import ListDone from "./ListDone";
// import ListItem from "./ListITem";
// import ApTask from "./../../../ApiServer/ApiTask";

const Buttons = () => {
  // const [btn, setBtn] = useState(false);
  // const [btnOlD, setbtnld] = useState(false);
  // const onlyD = useContext(DoneOnly);
  // const arrList = useContext(ArrForList);
  const arrNew = useContext(ArrNew);

  // const newApp = useContext

  // const ollTasks = () => {
  //   onlyD();
  //   arrNew("all");
  //   // setBtn(true);
  //   // setbtnld(false)

  //   // console.log(btn);
  // };

  // const onlyDones = () => {
  //   onlyD();
  //   arrNew("done");
  // };

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => arrNew("all")}
        >
          Всі завдання
        </button>
        <button type="button" className="btn btn-secondary"
        onClick={()=>arrNew("active")}>
          Не виконані
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => arrNew("done")}
        >
          Виконані
        </button>
      </div>
    </div>
  );
};

export default Buttons;

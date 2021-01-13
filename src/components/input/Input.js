import React, { useState, useContext } from "react";
import { AddNewTask } from "../../state";
import styleInput from "./input.module.css";

const Input = () => {
  console.log(styleInput);
  const [value, setValue] = useState("");
  const [valTitle, setValTitle] = useState("");

  const chengeValTitle = (el) => {
    setValTitle(el.target.value);
  };

  const chengeValue = (el) => {
    setValue(el.target.value);
  };
  //
  const addTask = useContext(AddNewTask);
  //
  const sendText = () => {
    addTask(value, valTitle);
    setValue("");
    setValTitle("");
  };
  const sendEnter = (e) => {
    if (e.key === "Enter") {
      sendText();
    }
  };
  return (
    <div>
      <p className={styleInput.b}>hello</p>
      <input
        type="text"
        value={valTitle}
        onChange={chengeValTitle}
        onKeyPress={sendEnter}
        placeholder={"Title"}
      />
      <input
        type="text"
        value={value}
        onChange={chengeValue}
        onKeyPress={sendEnter}
        placeholder={"Tasks"}
      />
      <button type="button" className="btn btn-dark" onClick={sendText}>
        send
      </button>
    </div>
  );
};

export default Input;

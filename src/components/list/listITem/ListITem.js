import React, { useContext, useState } from "react";
import {
  EditTask,
  DeleteFunc,
  ContextImportant,
  NewDoneLine,
  CansleObject,
  DoneOnly
} from "../../../state";
import EditInput from "./edit";
import stylePar from "./style.module.css";
import DoneText from "./done";


const ListItem = ({ id, text, title, important, line }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [doneTask, setDoneTask] = useState(line);
  // const [checkBox, setCheckBox] = useState(important);
  //if important false color black / else color red
  // const importantFunc = useContext(ContextImportant);
  const remove = useContext(DeleteFunc);
  const lineFunk = useContext(NewDoneLine);
  const a = useContext(CansleObject)
  // const onlyD = useContext(DoneOnly);

  const editShow = () => {
    setShowEdit(true);
  };

  const doneF = () => {
      setDoneTask(true);
      lineFunk(id,true)
  };

  // const handleChangeChk = (ev) => {
  //   setCheckBox(ev.target.checked);
  //   importantFunc(id, ev.target.checked);
  // };

  return (
    <div className={stylePar.box}>
      {/* {" "} */}
      <div className={stylePar.titleLi}>
        <h4>{title}</h4>
      </div>
      <div>
        {showEdit ? (
          <EditInput id={id} showF={setShowEdit} text={text} />
        ) : doneTask ? (
          <DoneText id={id} doneF={setDoneTask} text={text} remove={remove} a={a}/>
        ) : (
          <div className={stylePar.textBox}>
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input"
                checked={checkBox}
                type="checkbox"
                onChange={handleChangeChk}
              />
            </div> */}
            <p style={{ textDecoration: doneTask ? "line-through" : null }}>
              {text}
            </p>
            <div>
              <button
                type="button"
                className="btn btn-danger btnREd"
                onClick={() => remove(id)}
              >
                delete
              </button>

              <button
                type="button"
                className="btn btn-success"
                onClick={() => editShow()}
              >
                edit
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => doneF()}
                // onClick={() => handleClick()}
              >
                done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListItem;

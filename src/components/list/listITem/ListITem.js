import React, { useContext } from "react";
import { EditTask, DeleteFunc } from "../../../state";

const ListItem = ({ id, text, title }) => {
  const edit = useContext(EditTask);
  const remove = useContext(DeleteFunc);
  return (
    <div>
      {" "}
      <div className="titleLi">
        <h4>{title}</h4>
      </div>
      <li className="list-group-item li">
        <div className="textBox">
          {/* ///// */}
          {text}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => remove(id)}
          >
            delete
          </button>
          {/* /////// */}

          {/* editShow ? <Edit text={text} title={title} /> : (
              <> {text}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => remove(id)}
          >
            delete
          </button></>) */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => edit(id)}
          >
            edit
          </button>
        </div>
      </li>
    </div>
  );
};
export default ListItem;

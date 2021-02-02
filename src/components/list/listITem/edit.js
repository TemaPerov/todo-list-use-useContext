import React, { useState, useContext } from "react";
import Loader from "./../../loader/loader";
import { NewUpdate } from "./../../../state";
import editStyle from "./editStyle.module.css";

const EditInput = ({ id, text, showF }) => {
  const [loaderState, setLoaderState] = useState(false);
  const updateF = useContext(NewUpdate);
  const [editValue, setEditValue] = useState(text.trim().replace(/\s+/g, " "));

  const cancelF = () => {
    showF(false);
  };

  const saveF = () => {
    //setLoaderState(true);
    // start loader
    updateF(id, editValue);
    // setTimeout(() => {

    showF(false);
    //   setLoaderState(false);
    //   // end loader
    // }, 2000);
  };

  const editChange = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <div>
      {loaderState ? <Loader /> : null}

      <div className={editStyle.textBox}>
        {/* ///// */}
        <div className={editStyle.boxInput}>
          <input
            type="text"
            className={editStyle.inputText}
            value={editValue}
            onChange={editChange}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => saveF()}
          >
            save
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => cancelF()}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditInput;

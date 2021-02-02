import stylePar from "./style.module.css";
import React,{useState,useContext} from 'react'
import {NewDoneLine} from "../../../state"


const DoneText = ({ id, text, remove, doneF,obj}) => {
// const[cansleVal,setCansleVal] = useState(false)
// const [doneTask, setDoneTask] = useState(line);
const lineFunk = useContext(NewDoneLine);

const cansleFunk =()=>{
  doneF(false)
  lineFunk(id,false)
}

  return (
    <div className={stylePar.textBox}>
      <p style={{ textDecoration: doneF ? "line-through" : "none" }}>
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
          onClick={()=>cansleFunk(id)}
        >
          cansle
        </button>
      </div>
    </div>
  );
};
export default DoneText;

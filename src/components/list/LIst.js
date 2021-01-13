import { ArrForList } from "../../state";
import ListItem from "./listITem/ListITem";
import {useContext} from 'react'

const List = () => {
  const arrList = useContext(ArrForList)
  if (arrList === null) {
    return <div>записів немає</div>;
  } else if (arrList.length < 1) {
    return <div>записів немає</div>;
  }
 
  const list = arrList.map(({ id, text, title }) => {
    return (
      <ListItem
        key={id}
        id={id}
        text={text}
        title={title}
      />
    );
  });
 
  return (
    <div>
      <p></p>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default List;

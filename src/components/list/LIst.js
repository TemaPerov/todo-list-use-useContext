import { ArrForList } from "../../state";
import ListItem from "./listITem/ListITem";
import { useContext } from "react";
import ListStyle from "./list.module.css";

const List = () => {
  const arrList = useContext(ArrForList);
  if (arrList === null) {
    return <div>записів немає</div>;
  } else if (arrList.lenght < 1) {
    return <div>записів немає</div>;
  }

  const list = arrList.map(({ id, text, title, important, done,line }) => {
    return (
      <ListItem
        key={id}
        id={id}
        text={text}
        title={title}
        important={important}
        done={done}
        line={line}
      />
    );
  });

  return (
    <div className={ListStyle.container}>
      <div className={ListStyle.box}>{list}</div>
    </div>
  );
};

export default List;

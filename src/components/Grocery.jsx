import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";

export const Grocery = () => {
  const [data, setData] = useState([]);

  function addItem(value) {
    const task = {
      title: value,
      status: false,
      uid: uuid(),
    };
    setData([...data, task]);
  }

  const remove = (value) => {
    data.forEach((e, index) => {
      if (e.uid === value) {
        data.splice(index, 1);
      }
    });
    setData([...data]);
  };

  function changeStatus(nid) {
    data.forEach((e) => {
      if (e.uid === nid) {
        e.status ? (e.status = false) : (e.status = true);
      }
    });
    setData([...data]);
  }
  return (
    <>
      <GroceryInput addItem={addItem} />
      <div className="display">
           <h2>Display Board</h2>
        {data.map((e, index) => (
          <GroceryList
            changeStatus={changeStatus}
            remove={remove}
            el={e}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

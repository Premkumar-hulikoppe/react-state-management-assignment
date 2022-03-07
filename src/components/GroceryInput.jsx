import { useState } from "react";

export const GroceryInput = ({ addItem }) => {
  const [element, setElement] = useState("");
  return (
    <div className="inputBox">
      <input
        onInput={(e) => {
          setElement(e.target.value);
        }}
        type="text"
        placeholder="Please enter the item here.."
      />
      <button
        onClick={() => {
          addItem(element);
        }}
        className="addBtn"
      >
        Add
      </button>
    </div>
  );
};

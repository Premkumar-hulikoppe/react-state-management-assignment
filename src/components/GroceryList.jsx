import { v4 as uuid } from "uuid";

export const GroceryList = ({ el, index, changeStatus, remove }) => {
  return (
    <div className="item">
      <h3>{index + 1}</h3>
      <h3>{el.title}</h3>
      <h3>{el.status ? "Taken" : "Not Taken"}</h3>
      <button
        onClick={() => {
          changeStatus(el.uid);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          remove(el.uid);
        }}
      >
        Delete
      </button>
    </div>
  );
};

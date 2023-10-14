import React, { useEffect, useState } from "react";
import List from "./list";
import styles from "./todo.module.scss";

const Todo = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [editInfo, setEditInfo] = useState(null);


  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const submitHandler = (event) => {  
    event.preventDefault();
    if (editInfo) {
      updateItem(value);
    } else {
      addItem(value);
    }
    setValue("");
  };

  const addItem = (value) => {
    setItems(items.concat({ value, id: new Date().getTime(), isDone: false }));
  };

  const updateItem = (value) => {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === editInfo.id);
    item.value = value;
    setItems(newItems);
    setEditInfo(null);
  };

  const handleCompleteClick = (value) => {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === value.id);
    item.isDone = !value.isDone;
    setItems(newItems);
  };

  const handleEditClick = ({ id, value }) => {
    setValue(value);
    setEditInfo({ id, value });
  };

  const cancelHandler = () => {
    setValue("");
    setEditInfo(null);
  };

  const handleDeleteClick = (idx) => {
    if (editInfo?.id === items[idx].id) {
      setValue("");
      setEditInfo(null);
    }
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div className={styles.App}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          placeholder="Enter your todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" disabled={!value}>
          {editInfo ? "Update" : "Submit"}
        </button>
        <button
          type="reset"
          onClick={cancelHandler}
          disabled={!(value || editInfo)}
        >
          Cancel
        </button>
      </form>

      <List
        items={items}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleCompleteClick={handleCompleteClick}
      />
    </div>
  );
};

export default Todo;

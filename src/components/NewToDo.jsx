import React from 'react';
import './styles.css';
import { useState } from 'react';
import Task from './Task';

function NewToDo() {
    let counter = 0;
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
  
    function handleChange(event) {
      const newValue = event.target.value;
      setInputText(newValue);
    }
  
    function addItem() {
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
      counter += 1;
    }
  
    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input  onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ol>
            {items.map(todoItem => <li> <Task key={counter} task={todoItem} /> </li>)}
          </ol>
        </div>
      </div>
    );
}

export default NewToDo
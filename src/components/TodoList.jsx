import React from 'react';
import Task from './Task';

const listContainer = {
    display: "flex",
    flexDirection: "column",
    justifyConten: "center"
}

function TodoList() {
  return (
    <div style={listContainer}>
        <h1>TodoList</h1>
        <ol>
            <li><Task task={"task 1"} description={"is the first task of the list"} /></li>
            <li><Task task={"clean the room"} description={"is the second task of the list"} /></li>
            <li><Task task={"take trash out"} description={"is the third task of the list"} /></li>
        </ol>
    </div>
  )
}

export default TodoList
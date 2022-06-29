import React from 'react';

const card = {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #000",
    padding: 5,
    margin: 10
}

const strikeHandler = (e) => {
  e.target.style.textDecoration = "line-through";
}

function Task({task, description}) {
  return (
    <div style={card} >
        <h3 style={{margin: 2}} onClick={strikeHandler}>"{task}"</h3>
        <p style={{margin: 2}}>{description}</p>
        <div className="buttons" style={{margin: 2}}>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    </div>
  )
}

export default Task
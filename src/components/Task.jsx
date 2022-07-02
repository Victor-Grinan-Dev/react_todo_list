import React, { useState } from 'react';


const card = {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #000",
    padding: 5,
    margin: 10
}

function Task({task, description}) {
  const [striked, setStriked] = useState(false);

  const strikeHandler = (e) => {
    striked ? e.target.style.textDecoration = "line-through": e.target.style.textDecoration = "none"
    setStriked(!striked)
  }

  return (
    <div style={card} >
        <h3 style={{margin: 2}} onClick={strikeHandler}>"{task}"</h3>
        <p style={{margin: 2}}>{description}</p>
        <div className="buttons" style={{margin: 2}}>
        <button style={{margin: 2}} >Edit</button>
        <button style={{margin: 2}} > Delete</button>
        </div>
    </div>
  )
}

export default Task
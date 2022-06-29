import React from 'react';
import { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {

        setCount(count + 1);
    }
    const decrease = () => {     
        if (count > 0){
            setCount(count - 1)
        }
    }

  return (
    <div style={{
        width:200,
        display:'flex',
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <h1>{count}</h1>
        <div className="butons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </div>

    </div>
  )
}

export default Counter
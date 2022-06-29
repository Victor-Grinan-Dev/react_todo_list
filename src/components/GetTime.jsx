import React from 'react';
import { useState } from 'react';

function GetTime() {

    

    let now = new Date().toLocaleTimeString();

    const timeHandler = () => {
        setCurrentTime(now);
    }

    const [currentTime, setCurrentTime] = useState(null);
   
    //setInterval(timeHandler, 1000)
  return (
    <div>
        <h1>{!currentTime ? "Time" : currentTime}</h1>
        <div>
            <button onClick={timeHandler} > Show time </button>
        </div>
    </div>
  )     
}

export default GetTime
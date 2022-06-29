import React from "react";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import GetTime from "./components/GetTime";
import Animal from "./components/Animal";
import Cars from "./components/Cars";


const mainCss = {
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  heigth: "100vh"
}

function App() {
  return (
    <div className="App" style={mainCss}>
      <TodoList />
      <Counter />
      <GetTime />
      <Animal />  
      <Cars />    
    </div>
  );
}

export default App;

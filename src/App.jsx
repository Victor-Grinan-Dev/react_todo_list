import React from "react";
import TodoList from "./components/TodoList";

const mainCss = {
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center"
}

function App() {
  return (
    <div className="App" style={mainCss}>
      <TodoList />
    </div>
  );
}

export default App;

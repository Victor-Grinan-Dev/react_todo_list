import React from "react";
import NewToDo from "./components/NewToDo";


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
      <NewToDo />   
    </div>
  );
}

export default App;

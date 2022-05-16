import React, {useState} from "react";
import { ReactDOM } from "react";
import '../src/Styles/Body.css'
import TodoItems from "./Components/TodoItems";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="body-app">
      <h1 style={{textAlign:'center'}}>todo</h1>
      <Todos/>
    </div>
  );
}

export default App;

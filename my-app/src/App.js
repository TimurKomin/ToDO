import React, {useState} from "react";
import WrapperApp from "./Components/WrapperApp";
import '../src/Styles/Body.css'
function App() {
  return (
    <div className="body-app">
      <h1 style={{textAlign:'center'}}>todo</h1>
      <WrapperApp/>
    </div>
  );
}

export default App;

import React from "react";
import AddTask from "../Components/AddTask";
import Buttons from "../Components/Buttons"
import Pagination from "../Components/Pagination";
import '../Styles/WrapperApp.css'

function WrapperApp() {
    return (
        <div>
            <AddTask/>
            <ul className="todo-items">
                <li>Task #1</li>
                <li>Task #2</li>
                <li>Task #3</li>
                <li>Task #4</li>
            </ul>
            <Buttons/>
            <Pagination/>
        </div>
    );
}  
export default WrapperApp;
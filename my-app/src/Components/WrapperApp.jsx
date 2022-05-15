import React from "react";
import AddTask from "../Components/AddTask";
import Buttons from "../Components/Buttons"
import Pagination from "../Components/Pagination";
import '../Styles/WrapperApp.css'
import Button from "./ Button";

function WrapperApp() {
    return (
        <div>
            <AddTask/>
            <ul className="todo-items">
                <li><input type='checkbox'/>Task #1<Button body={'Delete'} classStyle={'btn-delete'}/></li>
                <li><input type='checkbox'/>Task #2<Button body={'Delete'} classStyle={'btn-delete'}/></li>
                <li><input type='checkbox'/>Task #3<Button body={'Delete'} classStyle={'btn-delete'}/></li>
                <li><input type='checkbox'/>Task #4<Button body={'Delete'} classStyle={'btn-delete'}/></li>
            </ul>
            <Buttons/>
            <Pagination/>
        </div>
    );
}  
export default WrapperApp;
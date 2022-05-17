import React, {useState} from "react";
import Button from "./ Button";
import '../Styles/Button.css'
import Todos from "./Todos";
import InputTodo from "./InputTodo";
const Buttons = (todos, setTodos, status, deleteTasks) => {
    

    return(
        <div className="buttons">
            <div className="check-del">
                <InputTodo type={'checkbox'} defaultChecked={status} /><p>Check All</p><Button callback={deleteTasks} body={'Delete'} classStyle={'btn-delete'}/>
            </div>
            <div className="sort-btn">
                <Button body={'Active'} classStyle={'btn-active'}/>
                <Button body={'Done'} classStyle={'btn-done'}/>
                <Button body={'All'} classStyle={'btn-all'}/>
            </div>
        </div>
    )
}
export default Buttons;
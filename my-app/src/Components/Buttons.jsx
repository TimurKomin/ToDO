import React, {useState} from "react";
import Button from "./ Button";
import '../Styles/Button.css'
import Todos from "./Todos";
import InputTodo from "./InputTodo";
const Buttons = ({todos, setTodos,  deleteTasks, check, checkAll, deleteCheck, filterTasks}) => {


    return(
        <div className="buttons">
            <div className="check-del">
                <InputTodo type={'checkbox'} callback={checkAll}  checked={check}  /><p>Check All</p><Button callback={deleteCheck} body={'Delete'} classStyle={'btn-delete'}/>
            </div>
            <div className="sort-btn">
                <Button body={'Active'} callback={filterTasks} classStyle={'btn-active'}/>
                <Button body={'Done'} callback={filterTasks} classStyle={'btn-done'}/>
                <Button body={'All'} callback={filterTasks} classStyle={'btn-all'}/>
            </div>
        </div>
    )
}
export default Buttons;
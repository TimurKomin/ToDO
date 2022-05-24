import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";

const TodoItems = ({ todo, deleteTasks, checkTask }) => {
    const [inputCreate, setInputCreate] = useState(true);
    const [inputItemValue, setInputItemValue] = useState("");
console.log("todo", todo);
    const openInput = () => {
    setInputCreate(prev => !prev);
    rewrite();
    };
    const rewrite = () => {
    let valueItem = todo.name;
    setInputItemValue(valueItem);
    return valueItem;
    };

    const saveTask = (e) => {
    setInputItemValue(e.target.value);
    };

    const saveSpan = (e) => {
    if (e.key === "Enter") {
        if(e.target.value){
        todo.name = inputItemValue;
        }
        setInputCreate(!inputCreate);
        
    } else if (e.key === "Escape") {
        setInputCreate(!inputCreate);
    }
    };

    const saveOnFocus = () => {
    if(inputItemValue){
    todo.name = inputItemValue;
    }
    setInputCreate(!inputCreate);
    
    };

    return (
    <li id={todo.uuid}>
        <InputTodo
        checked={todo.done}
        todo={todo}
        callback={(e) => checkTask(e, todo.uuid)}
        type={"checkbox"}
        />
        {inputCreate === true ? (
        <span onDoubleClick={openInput} id={todo.uuid}>
            {" "}
            {todo.name}{" "}
        </span>
        ) : (
        <input
            autoFocus
            className="input-li"
            value={inputItemValue}
            onBlur={saveOnFocus}
            onChange={saveTask}
            onKeyDown={saveSpan}
        />
        )}
        <Button
        body={"DEL"}
        classStyle={"btn-del"}
        callback={() => deleteTasks(todo.uuid)}
        />
    </li>
    );
};

export default TodoItems;

import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";

const TodoItems = ({ todo, deleteTasks, checkTask, patchChangeTask }) => {
    const [inputCreate, setInputCreate] = useState(true);
    const [inputItemValue, setInputItemValue] = useState("");
    const openInput = () => {
    setInputCreate(prev => !prev);
    rewrite();
    };
    const rewrite = () => {
    let valueItem = todo.name;
    setInputItemValue(valueItem);
    return valueItem;
    };

    const saveTask = (e, uuid) => {
        patchChangeTask(e, uuid)
    setInputItemValue(e.target.value);
    };

    const saveSpan = (e, uuid) => {
    if (e.key === "Enter") {
        if(e.target.value){
        todo.name = inputItemValue;
        patchChangeTask(e, uuid)
        setInputCreate(!inputCreate);
        }
        
        
    } else if (e.key === "Escape") {
        setInputCreate(!inputCreate);
    }
    };

    const saveOnFocus = (e, uuid) => {
    if(inputItemValue){
        todo.name = inputItemValue;
        
        patchChangeTask(e, uuid)
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
            onBlur={(e) => saveOnFocus(e, todo.uuid)}
            onChange={(e) => saveTask(e, todo.uuid)}
            onKeyDown={(e) => saveSpan(e, todo.uuid)}
        />
        )}
        <Button
        body={"DEL"}
        classStyle={"btn-del"}
        callback={() => deleteTasks(todo.name, todo.uuid)}
        />
    </li>
    );
};

export default TodoItems;

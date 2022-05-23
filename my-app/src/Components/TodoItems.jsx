import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";

const TodoItems = ({ todo, deleteTasks, checkTask }) => {
    const [inputCreate, setInputCreate] = useState(true);
    const [inputItemValue, setInputItemValue] = useState("");

    const openInput = () => {
    setInputCreate(prev => !prev);
    rewrite();
    };
    const rewrite = () => {
    let valueItem = todo.body;
    setInputItemValue(valueItem);
    return valueItem;
    };

    const saveTask = (e) => {
    setInputItemValue(e.target.value);
    };

    const saveSpan = (e) => {
    if (e.key === "Enter") {
        todo.body = inputItemValue;
        setInputCreate(!inputCreate);
    } else if (e.key === "Escape") {
        setInputCreate(!inputCreate);
    }
    };

    const saveOnFocus = () => {
    todo.body = inputItemValue;
    setInputCreate(!inputCreate);
    };

    return (
    <li id={todo.id}>
        <InputTodo
        checked={todo.status}
        todo={todo.id}
        callback={() => checkTask(todo.id)}
        type={"checkbox"}
        />
        {inputCreate === true ? (
        <span onDoubleClick={openInput} id={todo.id}>
            {" "}
            {todo.body}{" "}
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
        callback={() => deleteTasks(todo.id)}
        />
    </li>
    );
};

export default TodoItems;

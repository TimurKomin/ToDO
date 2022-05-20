import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";

const TodoItems = ({ todo, deleteTasks, checkTask, check }) => {
const [inputCreate, setInputCreate] = useState(true);
const [inputItemValue, setInputItemValue] = useState('')

const openInput = () => {
    setInputCreate(!inputCreate);
    rewrite()
};
const rewrite = () => {
    let valueItem = todo.body
    setInputItemValue(valueItem)
    return valueItem
}

const saveTask = (e) => {
    console.log(e.target.value)
    setInputItemValue(e.target.value)
    
}

const saveSpan = (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
    console.log(todo.body)
    todo.body = inputItemValue
    setInputCreate(!inputCreate)
    }else if(e.key === 'Escape'){
        console.log(12)
    setInputCreate(!inputCreate)
    }
}

const saveOnFocus = () => {
    todo.body = inputItemValue
    setInputCreate(!inputCreate)
}

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
        <input value={inputItemValue} onBlur={saveOnFocus} onChange={saveTask} onKeyDown={saveSpan}
        />
    )}
    <Button
        body={"DELETE"}
        classStyle={"btn-del"}
        callback={() => deleteTasks(todo.id)}
    />
    </li>
);
};

export default TodoItems;

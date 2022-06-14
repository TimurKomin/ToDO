import React from "react";
// import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";
import { http } from "../api/http";
import ButtonAntd1 from "./ Button";
// import {Button} from 'antd'

const TodoItems = ({ todo, deleteTask, checkTask, getTodos }) => {
    const [inputCreate, setInputCreate] = useState(true);
    const [inputItemValue, setInputItemValue] = useState("");

    const changeTask = async (uuid) => {
        try {
        await http.patch(`/patchTask/?uuid=${uuid}`, {
            name: inputItemValue,
        });
        } catch (err) {
        console.log(err);
        }
        getTodos();
    };

    const openInput = () => {
        setInputCreate((prev) => !prev);
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

    const saveSpan = (e, uuid) => {
        if (e.key === "Enter" || e.type === "blur") {
        if (e.target.value.trim()) {
            changeTask(uuid);
        }
        setInputCreate(!inputCreate);
        } else if (e.key === "Escape") {
        setInputCreate(!inputCreate);
        }
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
            onBlur={(e) => saveSpan(e, todo.uuid)}
            onChange={(e) => saveTask(e, todo.uuid)}
            onKeyDown={(e) => saveSpan(e, todo.uuid)}
            />
        )}
        <ButtonAntd1
            // classStyle={"btn-del"}
            type={"danger"}
            body={<h3>DEL</h3>}
            // 
            callback={() => deleteTask(todo.uuid)}
        />
        </li>
    );
};

export default TodoItems;

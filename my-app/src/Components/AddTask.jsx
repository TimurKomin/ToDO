import React, { useState } from "react";
import Button from "./ Button";
import "../Styles/Button.css";
import "../Styles/AddTask.css";
import InputTodo from "./InputTodo";
// import Button from 'antd/es/button'

const AddTask = ({
    addTodoHandler,
    inputValue,
    getValue,
    sortByDate,
    statusFilter,
    }) => {
    const keyAdd = (e) => {
        if (e.key === "Enter") {
        addTodoHandler();
        }
    };
    return (
        <div className="add-task">
        <InputTodo
            onKeyDown={keyAdd}
            type={"text"}
            value={inputValue}
            placeholder={"New Task.."}
            classStyle={"from-control"}
            callback={getValue}
        />
        <Button type={"primary"} body={"Add"} callback={addTodoHandler} />
        <div className="block-sort">
            Sort By Date
            <Button
            type="primary"
            body={statusFilter}
            callback={sortByDate}
            // classStyle={"btn-swap"}
            />
        </div>
        </div>
    );
    };
    export default AddTask;

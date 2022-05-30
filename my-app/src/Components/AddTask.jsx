import React, { useState } from "react";
import Button from "./ Button";
import "../Styles/Button.css";
import "../Styles/AddTask.css";
import InputTodo from "./InputTodo";
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
        <Button body={"Add"} classStyle={"btn-add"} callback={addTodoHandler} />
        <div className="block-sort">
            Sort By Date
            <Button
            body={statusFilter}
            callback={sortByDate}
            classStyle={"btn-swap"}
            />
        </div>
        </div>
    );
    };
    export default AddTask;

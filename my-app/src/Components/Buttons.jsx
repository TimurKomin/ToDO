import React, { useState } from "react";
import Button from "./ Button";
import "../Styles/Button.css";
import InputTodo from "./InputTodo";
const Buttons = ({ check, checkAll, deleteCheck, filterTasks, todos, filter, setFilter }) => {
    return (
    <div className="buttons">
        <div className="check-del">
        <InputTodo type={"checkbox"} classStyle={'check-all'} callback={checkAll} checked={todos.every((item) => item.done === true)} />
        <p>Check All</p>
        <Button
            callback={deleteCheck}
            body={"Delete"}
            classStyle={"btn-delete"}
        />
        </div>
        <div className="sort-btn">
        <Button
            body={"Active"}
            callback={filterTasks}
            classStyle={filter === false ? 'button-active' : "btn-active"}
        />
        <Button body={"Done"} callback={filterTasks}  classStyle={filter === true ? 'button-active' : "btn-done"} />
        <Button body={"All"} callback={filterTasks}  classStyle={filter === '' ? 'button-active' : "btn-all"} />
        </div>
    </div>
    );
};
export default Buttons;

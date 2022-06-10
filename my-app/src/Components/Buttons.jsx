import React, { useState } from "react";
import Button from "./ Button";
import "../Styles/Button.css";
import InputTodo from "./InputTodo";
const Buttons = ({
    check,
    deleteTasks,
    setCurrentPage,
    checkAll,
    setFilter,
    filter,
    }) => {
    return (
        <div className="buttons">
        <div className="check-del">
            <InputTodo
            type={"checkbox"}
            classStyle={"check-all"}
            callback={checkAll}
            checked={check}
            />
            <p>Check All</p>
            <Button
            callback={deleteTasks}
            body={"Delete-ALL"}
            classStyle={"btn-delete"}
            />
        </div>
        <div className="sort-btn">
            <Button
            body={"Active"}
            callback={() => { setFilter("undone"); setCurrentPage(0) }}
            classStyle={filter === 'undone' ? "button-active" : "btn-active"}
            />
            <Button
            body={"Done"}
            callback={() =>{ setFilter("done"); setCurrentPage(0) }}
            classStyle={filter === 'done' ? "button-active" : "btn-done"}
            />
            <Button
            body={"All"}
            callback={() => { setFilter(""); setCurrentPage(0) }}
            classStyle={filter === "" ? "button-active" : "btn-all"}
            />
        </div>
        </div>
    );
};
export default Buttons;

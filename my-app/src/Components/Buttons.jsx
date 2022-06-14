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
    size
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
            <p>Check Page</p>
            <Button
            type="danger"
            size={"large"}
            callback={deleteTasks}
            body={"Erase page"}
            />
        </div>
        <div className="sort-btn">
            <Button
            type="primary"
            size={filter === 'undone' ? "large" : "middle"}
            body={"Active"}
            callback={() => { setFilter("undone"); setCurrentPage(0) }}
            
            />
            <Button
            type="primary"
            size={filter === 'done' ? "large" : "middle"}
            body={"Done"}
            callback={() =>{ setFilter("done"); setCurrentPage(0) }}
            />
            <Button
            type="primary"
            size={filter === '' ? "large" : "middle"}
            body={"All"}
            callback={() => { setFilter(""); setCurrentPage(0) }}
            />
        </div>
        </div>
    );
};
export default Buttons;

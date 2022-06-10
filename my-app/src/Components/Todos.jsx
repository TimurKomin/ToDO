import React, { Component, useState, useEffect } from "react";
import AddTask from "./AddTask";
import Buttons from "./Buttons";
import Pagination from "./Pagination";
import "../Styles/Todos.css";
import TodoItems from "./TodoItems";
import { http } from "../api/http";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [check, setCheck] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState("");
    const [sortTasks, setSortTask] = useState("asc");
    const [totalPage, setTotalPage] = useState(0);
    const [statusFilter, setStatusFilter] = useState("OLD");
    const [countButtons, setCountButtons] = useState([]);
    const [length, setLength] = useState(0);

    const getTodos = async () => {
        try {
        const response = await http.get(
            `/getTask?page=${currentPage }&order=${sortTasks}&allPerPage=5&filterBy=${filter}`
        );
        console.log(response.data.rows)
        setTodos(response.data.rows);
        setTotalPage(Math.ceil(response.data.count / 5));
        setLength(response.data.count);

        } catch (err) {
        console.log(err);
        }
    };

    useEffect(() => {
        if (todos.length > 0) {
        const isChecked = todos.every(({ done }) => done);
        setCheck(isChecked);
        }
    }, [todos]);

    useEffect(() => {
        if (todos.length === 0 && currentPage > 0) {
        const page = currentPage - 1;
        setCurrentPage(page);
        }
    }, [length]);

    useEffect(() => {
        getTodos();
    }, [currentPage, filter, sortTasks]);

    useEffect(() => {
        setCountButtons([...new Array(totalPage).keys()]);
    }, [totalPage, todos]);

    const selectPage = (e) => setCurrentPage(Number(e.target.id));

    const postTodos = async (obj) => {
        try {
        await http.post(`/postTask`, obj);
        await getTodos();
        } catch (err) {
            console.log("Задача не добавлена");
        }
    };

    const deleteTask = async (uuid) => {
        try {
        await http.delete(`/deleteTask/?uuid=${uuid}`);
        if (todos.length > 1) {
            await getTodos();
        } else {
            setCurrentPage(currentPage - 1);
        }
        } catch (err) {
        console.log(err);
        }
    };

    const taskCraete = () => {
        if (inputValue.trim()) {
        const newTask = {
            name: inputValue,
            done: false,
        };
        postTodos(newTask);
        }
    };

    const getValue = (e) => {
        let value = e.target.value;
        setInputValue(value);
        e.preventDefault();
    };

    const addTodoHandler = () => {
        taskCraete();
        setInputValue("");
    };

    const sortByDate = () => {
        setStatusFilter("NEW");
        if (statusFilter === "NEW") setStatusFilter("OLD");
        setSortTask("desc");
        if (sortTasks === "desc") setSortTask("asc");
    };

    const checkAll = async ({ target }) => {
        try {
        setCheck(target.checked);
        const arrProm = await todos.map(
            (item) =>
            (item = http.patch(`/patchTask/?uuid=${item.uuid}`, {
                done: target.checked,
            }))
        );
        await Promise.all(arrProm);
        if (filter === "" || currentPage === 0) {
            await getTodos();
        } else if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
        }
        } catch (err) {
        console.log(err);
        }
    };

    const deleteTasks = async () => {
        if (todos.length) {
        const arrProm = todos.map(
            (item) => (item = http.delete(`/deleteTask/?uuid=${item.uuid}`))
        );
        try {
            await Promise.all(arrProm);
            if (currentPage > 0 && currentPage === totalPage - 1) {
            await setCurrentPage((prev) => prev - 1);
            } else if (currentPage === 0 || currentPage !== totalPage - 1) {
            await getTodos();
            }
        } catch (err) {
            console.log(err);
        }
        }
    };

    const checkTask = async (e, uuid) => {
        try {
        const resp = await http.patch(`/patchTask/?uuid=${uuid}`, {
            done: e.target.checked,
        });
        if (todos.length > 1) {
            await getTodos();
        } else {
            setCurrentPage(currentPage - 1);
        }
        } catch (err) {
        alert(err);
        }
    };

    return (
        <div id="Todos">
        <AddTask
            statusFilter={statusFilter}
            addTodoHandler={addTodoHandler}
            inputValue={inputValue}
            getValue={getValue}
            sortByDate={sortByDate}
        />
        <Buttons
            setCheck={setCheck}
            check={check}
            setCurrentPage={setCurrentPage}
            filter={filter}
            setFilter={setFilter}
            checkAll={checkAll}
            todos={todos}
            deleteTasks={deleteTasks}
        />
        <ul className="todo-items">
            {todos.map((todo) => {
            return (
                <TodoItems
                getTodos={getTodos}
                id={todo.uuid}
                checkTask={checkTask}
                key={todo.uuid}
                todo={todo}
                deleteTask={deleteTask}
                />
            );
            })}
        </ul>
        <Pagination
            countButtons={countButtons}
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectPage={selectPage}
        />
        </div>
    );
};
export default Todos;

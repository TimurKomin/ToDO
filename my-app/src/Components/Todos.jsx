import React, { Component, useState, useEffect } from "react";
import AddTask from "./AddTask";
import Buttons from "./Buttons";
import Pagination from "./Pagination";
import "../Styles/Todos.css";
import TodoItems from "./TodoItems";
import { http } from "../api/http";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [check, setCheck] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("");
    const [pagesCurrent, setPagesCurrent] = useState(0);
    const [filterServ, setFilterServ] = useState("");
    const [sortServ, setSortServ] = useState("asc");
    const [pagination, setPagination] = useState(0);
    console.log(todos);

    const selectPage = (e) => {
    console.log(e.target.id);
    setPagesCurrent(Number(e.target.id));
    console.log(pagesCurrent);
    };

    const getTodos = async () => {
    try {
        console.log(pagesCurrent);
        const response = await http.get(
        `/tasks/6?page=${
            pagesCurrent + 1
        }&order=${sortServ}&pp=5&filterBy=${filterServ}`
        );
        console.log("res", response);
        setTodos((todos) => (todos = response.data.tasks));
        console.log(pagesCurrent);
    } catch (err) {
        console.log(err);
    }
    };

    const paginationApi = async () => {
    try {
        const resp = await http.get(`/tasks/6`);
        console.log(resp);
        setPagination(Math.ceil(resp.data.count / 5));
    } catch (error) {
        console.log(error);
    }
    };

    const postTodos = async (obj) => {
    try {
        const resp = await http.post("task/6", obj);
        console.log(resp);
    } catch (err) {
        console.error(err, 1);
    }
    getTodos();
    };

    const patchPost = async (e, uuid) => {
    console.log(e);
    try {
        const resp = await http.patch(`/task/6/${uuid}`, {
        done: e.target.checked,
        });
        console.log(resp);
        // const todo = resp.data;
    } catch (err) {
        console.log(err);
    }
    getTodos();
    };

    const patchChangeTask = async (e, uuid) => {
    console.log(e.target.value);
    try {
        const resp = await http.patch(`/task/6/${uuid}`, {
        name: e.target.value,
        });
        console.log(resp);
    } catch (err) {
        console.log(err);
    }
    };

    const deleteTask = async (uuid) => {
    console.log(uuid);
    try {
        const resp = await http.delete(`/task/6/${uuid}`);
        console.log(resp);
    } catch (err) {
        console.log(err);
    }
    };

    useEffect(() => {
    getTodos();
    }, [filter, pagesCurrent, filterServ, sortServ]);
    useEffect(() => {
    paginationApi();
    }, [todos]);

    const taskCraete = () => {
        if (inputValue.trim()) {
            const newTask = {
            name: inputValue,
            done: false,
            };  
        postTodos(newTask);
        setTodos([...todos, newTask]);
    }
    if (pageCurrent().length === 4) {
        setPagesCurrent(pagesCurrent + 1);
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
        buttonPage();
    };

    const sortByDate = () => {
        setSortServ((sortServ) => (sortServ = "desc"));
        console.log(sortServ);
        if (sortServ === "desc") setSortServ((sortServ) => (sortServ = "asc"));
    };

    const checkAllApi = async () => {
        const arr = todos.filter((item) => item.done === false);
        const arrProm = arr.map(({ uuid }) =>
        http.patch(`/task/6/${uuid}`, { done: true })
        );
        console.log(arrProm);
        try {
        const resp = await Promise.all(arrProm);
        console.log(resp);
        } catch (err) {
        console.log(err);
        }
        getTodos()
    };

    const checkAll = () => {
    checkAllApi();
    };

    const deleteCheck = async () => {
        const arr = todos.filter((item) => item.done === true);
        const arrProm = arr.map(({ uuid }) => http.delete(`/task/6/${uuid}`));
        console.log(arrProm);
        try {
            const resp = await Promise.all(arrProm);
            console.log(resp);
        } catch (err) {
            console.log(err);
        }
        getTodos();
    };

    const filterTasks = async (e) => {
        if (e.target.className === "btn-active") {
        setFilter(false);
        setFilterServ("undone");
            try {
                const resp = await http.get(`/tasks/6`);
                console.log(resp.data.tasks);
            } catch (err) {
                console.log(err);
            }

        setPagesCurrent(pagesCurrent - pagesCurrent);
        } else if (e.target.className === "btn-done") {
            setFilter(true);
            setFilterServ("done");
            setPagesCurrent(pagesCurrent - pagesCurrent);
        } else if (e.target.className === "btn-all") {
            setFilter("");
            setFilterServ("");
        }
    };

    const filterRender = () => {
        const ver = todos.filter((item) =>
        filter === "" ? true : item.done === filter);
        return ver;
    };

    const buttonPage = () => {
        const newPage = Math.ceil(filterRender().length / 5);
        return newPage;
    };

    const pageCurrent = () => {
        const start = pagesCurrent * 5;
        const end = start + 5;
        const page = todos.slice(start, end);
        console.log(page);
        return page;
    };

    const deleteTasks = (name, uuid) => {
        deleteTask(uuid);
        setTodos([...todos.filter((todo) => todo.name !== name)]);
        if (pageCurrent().length === 1) {
        setPagesCurrent(pagesCurrent - 1);
        }
    };

    const checkTask = (e, id) => {
        if (todos.length === 1) {
        if (pagesCurrent > 0) {
            setPagesCurrent(pagesCurrent - 1);
        }
        }
        patchPost(e, id);
        // setTodos(
        // todos.map((item) => {
        //     if (item.uuid === id) {
        //     return { ...item, done: !item.done };
        //     } else {
        //     return item;
        //     }
        // })
        // );
    };


    return (
        <div id="Todos">
            <AddTask
            todos={todos}
            addTodoHandler={addTodoHandler}
            setTodos={setTodos}
            inputValue={inputValue}
            getValue={getValue}
            sortByDate={sortByDate}
            setInputValue={setInputValue}
            setSortServ={setSortServ}
            sortServ={sortServ}
            />
                <ul className="todo-items">
                    {todos.map((todo) => {
                    return (
                        <TodoItems
                        patchChangeTask={patchChangeTask}
                        id={todo.uuid}
                        todos={todos}
                        checkTask={checkTask}
                        check={check}
                        setCheck={setCheck}
                        key={todo.uuid}
                        todo={todo}
                        deleteTasks={deleteTasks}
                        />
                    );
                    })}
                </ul>
                <Buttons
                    filter={filter}
                    setFilter={setFilter}
                    filterTasks={filterTasks}
                    deleteCheck={deleteCheck}
                    checkAll={checkAll}
                    check={check}
                    setCheck={setCheck}
                    todos={todos}
                    deleteTasks={deleteTasks}
                />
                <Pagination
                    getTodos={getTodos}
                    pagination={pagination}
                    setPagination={setPagination}
                    filterRender={filterRender()}
                    pagesCurrent={pagesCurrent}
                    setPagesCurrent={setPagesCurrent}
                    selectPage={selectPage}
                    buttonPage={buttonPage}
                    todos={todos}
                    setTodos={setTodos}
                />
        </div>
    );
};
export default Todos;

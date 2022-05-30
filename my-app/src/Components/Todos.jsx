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
    const [statusFilter, setStatusFilter] = useState('OLD');
    const [countButtons, setCountButtons] = useState([]);

    useEffect(() => {
        getTodos();
        }, [ currentPage, filter, sortTasks]);

    useEffect(() => {if (todos.length === 0 && currentPage > 0){
            setCurrentPage(prev => prev-1)};
            }, [todos.length]);
        
    useEffect(() => {
        setCountButtons([...new Array(totalPage).keys()]);
        }, [totalPage, todos]);
        
    const selectPage = (e) => {
    setCurrentPage(Number(e.target.id));
    };

    const getTodos = async () => {
    try {
        const response = await http.get(
        `/tasks/6?page=${
            currentPage + 1
        }&order=${sortTasks}&pp=5&filterBy=${filter}`
        );
        setTodos(response.data.tasks);
        setTotalPage(Math.ceil(response.data.count / 5));
    } catch (err) {
        console.log(err);
    }
    };

    const postTodos = async (obj) => {
    try {
        await http.post("task/6", obj);
        alert('Задача добавлена');
    } catch (err) {
        alert('Задача не добавлена');
    }
    getTodos();
    };

    

    const deleteTask = async (uuid) => {
    try {
        await http.delete(`/task/6/${uuid}`);
    } catch (err) {
        console.log(err);
    }
    getTodos()   
    };

    const taskCraete = () => {
        if (inputValue.trim()) {
            const newTask = {
            name: inputValue,
            done: false,
            };  
        postTodos(newTask);
        setTodos([...todos, newTask]);
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
        setStatusFilter('NEW')
        if(statusFilter === 'NEW') setStatusFilter('OLD');
        setSortTask("desc");
        if (sortTasks === "desc") setSortTask("asc");
    };

    const checkAll = async () => {
        setCheck(!check)
        if(todos.length){
            const arrProm = todos.map(({ uuid }) =>
            http.patch(`/task/6/${uuid}`, { done: check })
            );
            try {
            const resp = await Promise.all(arrProm);
            getTodos()
            } catch (err) {
            console.log(err);
            }
        }  
    };


    const deleteTasks = async () => {
        if(todos.length){
            const arrProm = todos.map(({ uuid }) => http.delete(`/task/6/${uuid}`));
            try {
                const resp = await Promise.all(arrProm);
            } catch (err) {
                console.log(err);
            }
            getTodos();
        }
    };


    const checkTask = async (e, uuid) => {
        try {
            const resp = await http.patch(`/task/6/${uuid}`, {
            done: e.target.checked,
            });
        } catch (err) {
            alert(err);
        }
        getTodos();

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
                        id={todo.uuid}
                        checkTask={checkTask}
                        key={todo.uuid}
                        todo={todo}
                        deleteTasks={deleteTasks}
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

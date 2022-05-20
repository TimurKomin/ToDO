import React, { useState } from "react";
import AddTask from "./AddTask";
import Buttons from "./Buttons";
import Pagination from "./Pagination";
import "../Styles/Todos.css";
import TodoItems from "./TodoItems";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [check, setCheck] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("");
    const [pagesCurrent, setPagesCurrent] = useState(0);
    const [arrayRender, setArrayRende] = []
    const taskCraete = () => {
    if (inputValue.trim()) {
        const newTask = {
        id: Date.now(),
        body: inputValue,
        status: false,
        };
        setTodos([...todos, newTask]);
    }
    if (pageCurrent().length === 5) {
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
    setTodos([...todos.reverse()]);
    };

    const checkAll = () => {
    setCheck(!check);
    setTodos(
        todos.map((item) => {
        return { ...item, status: !item.status };
        })
    );
    };

    const deleteCheck = () => {
    setTodos([...todos.filter((item) => item.status === false)]);
    };

    const filterTasks = (e) => {
    if (e.target.className === "btn-active") {
        setFilter(false);
        setPagesCurrent(pagesCurrent - pagesCurrent);
    } else if (e.target.className === "btn-done") {
        setFilter(true);
        setPagesCurrent(pagesCurrent - pagesCurrent);
    } else if (e.target.className === "btn-all") {
        setFilter("");
    }
    };

    const filterRender = () => {
    const ver = todos.filter((item) =>
        filter === "" ? true : item.status === filter
    );
    return ver;
    };

    const buttonPage = () => {
    const newPage = Math.ceil(filterRender().length / 5);
    return newPage;
    };

    const selectPage = (e) => {
    setPagesCurrent(Number(e.target.id));
    };

    const pageCurrent = () => {
    const start = pagesCurrent * 5;
    const end = start + 5;
    const page = filterRender().slice(start, end);
    return page;
    
    };

    const deleteTasks = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    if (pageCurrent().length === 1) {
        setPagesCurrent(pagesCurrent - 1);
    }
    };

    const checkTask = (id) => {
    if (pageCurrent().length === 1) {
        setPagesCurrent(pagesCurrent - 1);
    }
    setTodos(
        todos.map((item) => {
        if (item.id === id) {
            return { ...item, status: !item.status };
        } else {
            return item;
        }
        })
    );
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
        />
        <ul className="todo-items">
        {pageCurrent().map((todo) => {
            return (
            <TodoItems
                checkTask={checkTask}
                check={check}
                setCheck={setCheck}
                key={todo.id}
                todo={todo}
                deleteTasks={deleteTasks}
            />
            );
        })}
        </ul>
        <Buttons
        filterTasks={filterTasks}
        deleteCheck={deleteCheck}
        checkAll={checkAll}
        check={check}
        setCheck={setCheck}
        todos={todos}
        deleteTasks={deleteTasks}
        />
        <Pagination
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

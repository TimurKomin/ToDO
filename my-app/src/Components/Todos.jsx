import React, { Component, useState, useEffect } from "react";
import AddTask from "./AddTask";
import Buttons from "./Buttons";
import Pagination from "./Pagination";
import "../Styles/Todos.css";
import TodoItems from "./TodoItems";
import {http} from '../api/http'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [check, setCheck] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("");
    const [pagesCurrent, setPagesCurrent] = useState(0);
    

    const getTodos = async () => {
        try {
            const response = await  http.get(`/tasks/6?order=asc&pp=5&page=${pagesCurrent + 1}`)
            console.log('res', response);
            setTodos(response.data.tasks )
        } catch (err) {
            console.log(err);
        }
}

    const postTodos = async (obj) => {
            
            try { 
            const resp = await http.post('task/6',  obj ); 
            console.log(resp); 
            } catch (err) { 
                console.error(err, 1); 
                } 
            }; 

    const pathPost = async (e, uuid) => {
        console.log(e.target.checked)
        try {
            const resp = await http.patch(`/task/6/${uuid}`, {done: !e.target.checked})
            console.log(resp)
            const todo = resp.data;
            // setTodos(prev => { prev.map((item) => {
            //     if (item.uuid === uuid) {
            //         return { ...item, done: !item.done };
            //     } else {
            //         return item;
            //     }
            //     })

            // })
        } catch (err) {
            console.log(err)
        }
    }
    
    
    

    useEffect(() => {getTodos()}, [filter])
    

    const taskCraete = () => {
    if (inputValue.trim()) {
        const newTask = {
        // uuid: Date.now(),
        name: inputValue,
        done: false,
        };
        
        setTodos([...todos, newTask]);
        postTodos(newTask)
        // pathPost()
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
        return { ...item, done: check };
        })
    );
    };

    const deleteCheck = () => {
    setTodos([...todos.filter((item) => item.done === false)]);
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
        filter === "" ? true : item.done === filter
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

    const deleteTasks = (name) => {
    setTodos([...todos.filter((todo) => todo.name !== name)]);
    if (pageCurrent().length === 1) {
        setPagesCurrent(pagesCurrent - 1);
    }
    };

    const checkTask = (e, id) => {
    if (pageCurrent().length === 1) {
        if (pagesCurrent > 0) {
        setPagesCurrent(pagesCurrent - 1);
        }
    }
    pathPost(e, id)
    setTodos(
        todos.map((item) => {
        if (item.uuid === id) {
            return { ...item, done: !item.done };
        } else {
            return item;
        }
        })
    );
    };

    const checker = () => {
    setCheck(todos.every((item) => item.done === true));
    };
    console.log(todos)
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

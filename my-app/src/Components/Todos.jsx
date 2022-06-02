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
        
    // useEffect(() => { if (todos.every((item) => item.done === true)){
    //         setCheck(true) }  else { setCheck(false)}
    //     }, [todos]) 
    
    const selectPage = (e) => {
    setCurrentPage(Number(e.target.id));
    };

    const getTodos = async () => {
    try {
        const response = await http.get(
        `/getTask?page=${
            currentPage + 1
        }&order=${sortTasks}&pp=5&filterBy=${filter}`
        );
        console.log(response)
        setTodos(response.data.arr);
        setTotalPage(Math.ceil(response.data.count / 5));
    } catch (err) {
        console.log(err);
    }
    };

    const postTodos = async (obj) => {
    try {
        await http.post(`/postTask`, obj);
        alert('Задача добавлена');
    } catch (err) {
        alert('Задача не добавлена');
    }
    getTodos();
    };

    

    const deleteTask = async (uuid) => {
    try {
        await http.delete(`/deleteTask/?uuid=${uuid}`);
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
// setCheck(!check)
        console.log(check)
    const checkAll = async () => {
       
        
            const arrProm = todos.map((item) => item.uuid) 
            try {
               
            const resp = await http.patch(`/checkAll/?uuid=${arrProm}` , {check})
            console.log(arrProm)
            
            } catch (err) {
            console.log(err);
            
            
        } 
        getTodos()
        // setCurrentPage(currentPage)
    };


    const deleteTasks = async () => {
        if(todos.length){
            const x = todos.map(item => item.uuid)
            console.log()
            try {
                const resp = await http.delete(`deleteTasks/?page=${currentPage + 1}`);
                
            } catch (err) {
                console.log(err);
            }
            
            
        }
        getTodos();
    };


    const checkTask = async (e, uuid) => {
        try {
            const resp = await http.patch(`/patchTask/?uuid=${uuid}`, {
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

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
    const [length, setLength] = useState(0)
    
    
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
            setLength(response.data.count)

        } catch (err) {
            console.log(err);
        }
        };

        useEffect(() => {
            if(todos.length > 0) {
                const isChecked = todos.every(({done}) => done);
                setCheck(isChecked)
            }
        }, [todos])

useEffect(() => {
        if (todos.length === 1 && currentPage > 0) {
            const page = currentPage - 1
            setCurrentPage(page)};
            }, [length]);
        

    useEffect(() => {
        getTodos()
        }, [ currentPage, filter, sortTasks]);

    
    useEffect(() => {
        setCountButtons([...new Array(totalPage).keys()]);
        }, [totalPage, todos]);
        
    
    const selectPage = (e) => {
    setCurrentPage(Number(e.target.id));
    };



    const postTodos = async (obj) => {
    try {
        await http.post(`/postTask`, obj);
        // alert('Задача добавлена');
        await getTodos();
    } catch (err) {
        // alert('Задача не добавлена');
    }
    
    };

    

    const deleteTask = async (uuid) => {
        
        try {
            http.delete(`/deleteTask/?uuid=${uuid}`).then((response) => {
                console.log('@@@@@@@kek:', response.data);
            });
            await getTodos() 
            
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


    const checkAll = async ({target}) => {
        console.log("target", target.checked);


            const arrProm = todos.map((item) => item.uuid) 
            try {
                setCheck(target.checked)
            await http.patch(`/checkAll/?uuid=${arrProm}` , {check:  !target.checked})
            if(todos.length > 0 ){
            await getTodos()
            }
            console.log(arrProm)
            } catch (err) {
            console.log(err);
        } 
        
    };


    const deleteTasks = async () => {
        if(todos.length){
         
            const x = todos.map(item => item.uuid)
            console.log()
            try {
                const resp = await http.delete(`deleteTasks/?page=${currentPage + 1}`);
                if(currentPage > 0) {
            setCurrentPage(prev => prev - 1)
        }
                // if(currentPage === 0) {
                //     await getTodos();
                // }
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

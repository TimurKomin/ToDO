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
    const [filterServ, setFilterServ] = useState('')
    const [sortServ, setSortServ] = useState('asc')
    console.log(todos)

    const getTodos = async () => {
        try {
            const response = await  http.get(`/tasks/6?page${pagesCurrent+1}&order=${sortServ}&pp=20&filterBy=${filterServ}`)
            console.log('res', response);
            setTodos(todos => todos = response.data.tasks)
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

    const patchPost = async (e, uuid) => {
        console.log(e)
        try {
            const resp = await http.patch(`/task/6/${uuid}`, {done: e.target.checked})
            console.log(resp)
            const todo = resp.data;
        } catch (err) {
            console.log(err)
        }
    }
    
    const patchChangeTask = async (e, uuid) =>  {
        console.log(e.target.value)
        try {
            const resp = await http.patch(`/task/6/${uuid}`, {name: e.target.value})
        console.log(resp)
        }catch(err) {
            console.log(err)

        }

    }
    
    const deleteTask = async (uuid) => {
        console.log(uuid)
        try{
            const resp = await http.delete(`/task/6/${uuid}`)
            console.log(resp)
        }catch(err) {
            console.log(err)
        }
    } 

    useEffect(() => {getTodos()}, [filter])
    

    const taskCraete = () => {
    if (inputValue.trim()) {
        const newTask = {
        name: inputValue,
        done: false,
        };
        postTodos(newTask)
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
    // setTodos([...todos.reverse()]);
    setSortServ(sortServ => sortServ = 'desc')
    console.log(sortServ)
    if(sortServ === 'desc')
    setSortServ(sortServ => sortServ = 'asc')
    getTodos()
    };
    
    const checkAllApi = async () => {
        const arr = todos.filter((item) => item.done === false)
        const arrProm = arr.map(({uuid}) => http.patch(`/task/6/${uuid}`, {done: true}))
        console.log(arrProm)
        try {
            const resp = await Promise.all(arrProm)
            console.log(resp)
            
        }catch(err){
            console.log(err)
        }
    }

    const checkAll = () => {
    checkAllApi()
    // setCheck(!check);
    // setTodos(
    //     todos.map((item) => {
    //     return { ...item, done: check };
    //     })
    // );
    getTodos()
    };

    const deleteCheck = async () => {
        const arr = todos.filter((item) => item.done === true)
        const arrProm = arr.map(({uuid}) => http.delete(`/task/6/${uuid}`))
        console.log(arrProm)
        try {
            const resp = await Promise.all(arrProm)
            console.log(resp)
            
        }catch(err){
            console.log(err)
        }
    // setTodos([...todos.filter((item) => item.done === false)])
    getTodos()
    };

    const filterTasks = (e) => {
    if (e.target.className === "btn-active") {
        setFilter(false);
        setFilterServ('undone')
        setPagesCurrent(pagesCurrent - pagesCurrent);
    } else if (e.target.className === "btn-done") {
        setFilter(true);
        setFilterServ('done')
        setPagesCurrent(pagesCurrent - pagesCurrent);
    } else if (e.target.className === "btn-all") {
        setFilter("");
        setFilterServ('')
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

    const deleteTasks = (name, uuid) => {
        deleteTask(uuid)
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
    patchPost(e, id)
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
        setSortServ={setSortServ}
        sortServ={sortServ}
        />
        <ul className="todo-items">
        {pageCurrent().map((todo) => {
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

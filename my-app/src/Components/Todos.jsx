import React, { useState, useMemo } from "react";

import AddTask from "./AddTask";
import Buttons from "./Buttons"
import Pagination from "./Pagination";
import '../Styles/Todos.css'
import Button from "./ Button";
import TodoItems from "./TodoItems";
import InputTodo from "./InputTodo";

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [check, setCheck] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [filter, setFilter] = useState('')
    const [buttonPaging, setButtonPagin] = useState(null)
    // const [inputCreate, setInputCreate] = useState(true)
    const [arrayPagin, setArrayPagin] = useState([])
    const [pagesCurrent, setPagesCurrent] = useState(1)

    const taskCraete = () => {
        if(inputValue.trim()){
        const newTask = {
            id: Date.now(),
            body: inputValue,
            status: false,
        }
        setTodos([...todos, newTask])  
        }
        
    }

    const getValue = (e) => {
        let value = e.target.value
        setInputValue(value)
        e.preventDefault()

        
    }  

    const addTodoHandler = () => {
        taskCraete()
        setInputValue('')
        buttonPage()
    }
    const sortByDate = () => {
        setTodos([...todos.reverse()])
        console.log(todos)
    }


    const deleteTasks = (id) => {
        console.log(1)
        setTodos([...todos.filter((todo) => todo.id !== id)])
        
    }

    const checkAll = () => {
        setCheck(!check)
        setTodos(todos.map((item) => {
                return  {...item, status: !item.status}
        }))       
    }

    const checkTask = (id) => { 
        setTodos(todos.map((item) => {
            if(item.id === id){
            return  {...item, status: !item.status}
            }else{
                return item
            }
    }))       
}

const deleteCheck = () => {
    setTodos([...todos.filter((item) => item.status === false)])
}

const filterTasks = (e) =>{
    if(e.target.className === 'btn-active') {
        setFilter(false)
    }else if (e.target.className === 'btn-done') {
        setFilter(true)  
    }else if (e.target.className === 'btn-all'){
        setFilter('')
    }
}


const filterRender = () => {
    const ver =  todos.filter((item) => filter === '' ? true: item.status === filter)
    return ver
}


const buttonPage = () => {
    if(Math.ceil(todos.length%5) == 0){
        const newPage = {
        body: Math.ceil(1+todos.length/5)
        }
        setArrayPagin([...arrayPagin, newPage])
        
    }
    console.log(arrayPagin)
}

const selectPage = (e) => {
    console.log(pagesCurrent)
    setPagesCurrent(Number(e.target.id))
    
}

const pageCurrent = () => {
const start = (pagesCurrent - 1) * 5
const end = start + 5
const page = filterRender().slice(start, end)
console.log(page)
return page
}


    return (
        <div id='Todos'>
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
                { pageCurrent().map(todo => {
                    return <TodoItems
                    checkTask={checkTask}
                    check={check}
                    setCheck={setCheck}
                    key={todo.id} 
                    todo={todo} 
                    deleteTasks={deleteTasks}
                    />
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
            <div className="block-pagin"><ul className="pagination"></ul>
            <Button body={'<<'} classStyle={'pagins-l'}/>
                {arrayPagin.map(item => {
                    return <Button item={item} callback={selectPage} classStyle='pagins' id={item.body} body={item.body} key={item.body}></Button>
                })}
                <Button body={'>>'} classStyle={'pagins-r'}/>
            </div>
            <Pagination
            setButtonPagin={setButtonPagin}
            button={buttonPaging}
            buttonPage={buttonPage}
            todos={todos}
            setTodos={setTodos}
            />
        </div>
    );
    
}  
export default Todos;
import React, { useState } from "react";

import AddTask from "./AddTask";
import Buttons from "./Buttons"
import Pagination from "./Pagination";
import '../Styles/Todos.css'
import Button from "./ Button";
import TodoItems from "./TodoItems";

const Todos = () => {
    const [todos, setTodos] = useState([])

    const [inputValue, setInputValue] = useState('')

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
    }
    const SortByDate = () => {
        // const rev = (arr) => arr.reverse()
        setTodos(...todos.reverse())
        console.log(todos)
    }


    const deleteTasks = (id) => {
        console.log(1)
        setTodos([...todos.filter((todo) => todo.id !== id)])
        
    }


    return (
        <div id='Todos'>
            <AddTask
                todos={todos}
                addTodoHandler={addTodoHandler} 
                setTodos={setTodos}
                inputValue={inputValue}
                getValue={getValue}
                SortByDate={SortByDate}
                setInputValue={setInputValue}
            />
            <ul className="todo-items"> 
                { todos.map(todo => {
                    return <TodoItems 
                    key={todo.id} 
                    todo={todo} 
                    deleteTasks={deleteTasks}
                    />
                })}
            </ul>
            <Buttons 
            todos={todos}
            deleteTasks={deleteTasks}
            />
            <Pagination/>
        </div>
    );
    
}  
export default Todos;
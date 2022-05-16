import React, { useState } from "react";

import AddTask from "./AddTask";
import Buttons from "./Buttons"
import Pagination from "./Pagination";
import '../Styles/Todos.css'
import Button from "./ Button";
import TodoItems from "./TodoItems";

const Todos = () => {
    const [todos, setTodos] = useState([])
    
    return (
        <div id='Todos'>
            <AddTask todos={todos} setTodos={setTodos}/>
            <ul className="todo-items"> 
                { todos.map(todo => {
                    return <TodoItems key={todo.id} todo = {todo}/>
                })}
            </ul>
            <Buttons/>
            <Pagination/>
        </div>
    );
    
}  
export default Todos;
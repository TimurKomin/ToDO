import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";

const TodoItems = ({todo, type, body}) => {
return(
<li><InputTodo todo={todo.id} type={'checkbox'}/>{todo.body}<Button body={'DELETE'} classStyle={'btn-del'}/></li>
);
}

export default TodoItems;
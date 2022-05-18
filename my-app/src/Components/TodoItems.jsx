import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";

const TodoItems = ({todo, type, body, deleteTasks, checkTask, check }) => {


return(
<li><InputTodo checked={todo.status} todo={todo.id} callback={() => checkTask(todo.id)} type={'checkbox'} />{todo.body}
<Button body={'DELETE'} classStyle={'btn-del'} callback={() => deleteTasks(todo.id)}/></li>
);
}

export default TodoItems;
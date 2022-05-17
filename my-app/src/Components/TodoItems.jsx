import React from "react";
import Button from "./ Button";
import InputTodo from "./InputTodo";
import { useState } from "react";

const TodoItems = ({todo, type, body, deleteTasks }) => {

    const [Checked, setChecked] = useState(todo.status)

return(
<li><InputTodo  todo={todo.id} defaultChecked={todo.status} type={'checkbox'}/>{todo.body}
<Button body={'DELETE'} classStyle={'btn-del'} callback={() => deleteTasks(todo.id)}/></li>
);
}

export default TodoItems;
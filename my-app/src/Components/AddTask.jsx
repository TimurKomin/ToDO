import React,{useState} from 'react';
import ReactDOM, { render } from 'react-dom';
import Button from './ Button';
import '../Styles/Button.css'
import '../Styles/AddTask.css'
import InputTodo from './InputTodo';
import TodoItems from './TodoItems';
import Todos from './Todos';
const AddTask = ({todos, setTodos, addTodoHandler, inputValue, tasks, getValue, SortByDate, setInputValue }) => {

    const keyAdd = (e) => {
        if(e.key === 'Enter'){
        addTodoHandler()
    }
    }
return(
    <div className='add-task' > 
        <InputTodo onKeyDown={keyAdd} type={'text'}  value={inputValue} placeholder={'New Task..'} classStyle={'from-control'} 
        callback={getValue}
        />
        <Button body={'Add'} classStyle={'btn-add'} callback={addTodoHandler}/>
        <ul>
        <div className='block-sort'>Sort By Date<Button body={'SWAP'} callback={SortByDate} classStyle={'btn-swap'}/></div>
        </ul>
    </div>
)
};
export default AddTask;
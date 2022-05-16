import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Button from './ Button';
import '../Styles/Button.css'
import '../Styles/AddTask.css'
import InputTodo from './InputTodo';
import TodoItems from './TodoItems';
import Todos from './Todos';
const AddTask = ({todos, setTodos}) => {
    let [tasks, setValue] = useState('')
    const getValue = (e) => {
            setValue(e.target.value)
    }  

    const taskCraete = () => {
        if(tasks.trim()){
        const newTask = {
            id: Date.now(),
            body: tasks,
        }
    setTodos([...todos, newTask]) 
        }
    }

    const SortByDate = () => {
           const rev = todos.reverse() 
           todos = rev
           console.log(rev)
           useState[0]=rev
             
    }

return(
    <div className='add-task' > 
        <InputTodo  type={'text'} placeholder={'New Task..'} classStyle={'from-control'} 
        defaultValue={tasks}
        callback={getValue}
        />
        <Button body={'Add'} classStyle={'btn-add'} callback={taskCraete}/>
        <ul>
        <div className='block-sort'>Sort By Date<Button body={'SWAP'} callback={SortByDate} classStyle={'btn-swap'}/></div>
        </ul>
    </div>
)
};
export default AddTask;
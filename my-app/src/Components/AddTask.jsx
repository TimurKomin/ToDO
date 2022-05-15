import React,{useState} from 'react';
import Button from './ Button';
import '../Styles/Button.css'
import '../Styles/AddTask.css'
const AddTask = () => {
    const tasks = [];
    const taskCraete = () => {
    tasks.push(`<li><checkbox></checkbox>${value}<button></button></li>`)
    console.log(tasks)  
    }
const [value, setValue] = useState('')      

// const [posts, setPosts] = useState({name:'', date:'',})    
return(
    <div className='add-task'> 
        <input  className='from-control' placeholder='New Task..'
        type='text'
        value = {value}
        onChange={event => setValue(event.target.value)}
        />
        <Button body={'Add'} classStyle={'btn-add'} onClick={taskCraete}/>
        <ul>
        <div>Sort By Date<Button body={'SWAP'} classStyle={'btn-swap'}/></div>
        </ul>
    </div>
)
};
export default AddTask;
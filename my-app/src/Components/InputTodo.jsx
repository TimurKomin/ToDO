import React from "react";
import '../Styles/AddTask.css'
const InputTodo = ({ type, placeholder, classStyle, value, callback}) => {

return (
    <input onChange={callback} type={type} placeholder={placeholder} className={classStyle} value={value}/>    
)
}

export default InputTodo
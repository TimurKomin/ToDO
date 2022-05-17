import React from "react";
import '../Styles/AddTask.css'
const InputTodo = ({ type, placeholder, classStyle, value, defaultChecked, callback, ...props}) => {

return (
    <input onChange={callback} type={type} placeholder={placeholder} defaultChecked={defaultChecked} className={classStyle} value={value} {...props}/>    
)
}

export default InputTodo
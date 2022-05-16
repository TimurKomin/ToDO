import React from "react";
import "../Styles/Buttons.css"
const Button = ({body, classStyle, callback}) => {
    return (
        <button className={classStyle} onClick={callback}>{body}</button>
    )
}
export default Button
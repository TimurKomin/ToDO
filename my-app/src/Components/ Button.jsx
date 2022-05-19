import React from "react";
import "../Styles/Buttons.css"
const Button = ({body, classStyle, callback, id}) => {
    return (
        <button id={id} className={classStyle} onClick={callback}>{body}</button>
    )
}
export default Button
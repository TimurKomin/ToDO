import React from "react";
import "../Styles/Buttons.css"
const Button = ({body, classStyle}) => {
    return (
        <button className={classStyle}>{body}</button>
    )
}
export default Button
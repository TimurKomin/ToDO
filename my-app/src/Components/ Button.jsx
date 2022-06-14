import React from "react";
import "../Styles/Buttons.css";
import { Button as ButtonAntd } from "antd";
import "antd/dist/antd.css";
const Button = ({ body, classStyle, callback, id, type, size, style }) => {
    return (
        <ButtonAntd style={style} size={size} id={id} type={type} className={classStyle} onClick={callback}>
        {body}
        </ButtonAntd>
    );
};
export default Button;

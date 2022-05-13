import React, {useState} from "react";
import Button from "./ Button";
import '../Styles/Button.css'
const Buttons = () => {
    return(
        <div className="buttons">
            <div className="check-del">
                <input type='checkbox'/><p>Выбрать Все</p><Button body={'Delete'} classStyle={'btn-delete'}/>
            </div>
            <div className="sort-btn">
                <Button body={'Active'} classStyle={'btn-active'}/>
                <Button body={'Done'} classStyle={'btn-done'}/>
                <Button body={'All'} classStyle={'btn-all'}/>
            </div>
        </div>
    )
}
export default Buttons;
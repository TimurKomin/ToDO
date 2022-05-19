import React,{useState} from 'react';
import "../Styles/Pagination.css"
import Button from './ Button';
const Pagination = ({todos, setTodos, buttonPage, buttonPagin, setButtonPagin}) => {   



return(
    <div className='block-pagin'>
        {/* <ul className='pagination'>
                <Button body={'<<'} classStyle={'pagins-l'}/>
                <div><Button body={Math.ceil(todos.length/5)} callback={buttonPage} classStyle={'pagins'}/></div>
                <Button body={'>>'} classStyle={'pagins-r'}/>
        </ul> */}
    </div>
)
};
export default Pagination;
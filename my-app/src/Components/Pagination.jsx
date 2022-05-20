import React,{useState} from 'react';
import "../Styles/Pagination.css"
import Button from './ Button';
const Pagination = ({todos, setTodos, buttonPage, buttonPagin, setButtonPagin, selectPage}) => {   



return(
    <div className='block-pagin'>
        <Button body={'<<'} callback={selectPage} classStyle={'pagins-l'}/>
                {[...Array(buttonPage()).keys()].map(item => {
                    return <Button item={item} callback={selectPage} classStyle='pagins' id={item} body={item+1} key={Math.random()}></Button>
                })}
                <Button body={'>>'} classStyle={'pagins-r'}/>
        
    </div>
)
};
export default Pagination;
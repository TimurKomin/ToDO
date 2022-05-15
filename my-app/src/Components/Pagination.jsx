import React,{useState} from 'react';
import "../Styles/Pagination.css"
import Button from './ Button';
const Pagination = () => {    
return(
    <div className='block-pagin'>
        <ul className='pagination'>
                <Button body={'<<'} classStyle={'pagins-l'}/>
                <Button body={'1'} classStyle={'pagins'}/>
                <Button body={'2'} classStyle={'pagins'}/>
                <Button body={'3'} classStyle={'pagins'}/>
                <Button body={'4'} classStyle={'pagins'}/>
                <Button body={'5'} classStyle={'pagins'}/>
                <Button body={'>>'} classStyle={'pagins-r'}/>
        </ul>
    </div>
)
};
export default Pagination;
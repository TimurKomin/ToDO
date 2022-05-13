import React,{useState} from 'react';
import "../Styles/Pagination.css"
const Pagination = () => {    
return(
    <div> 
        <ul className='pagination'>
        <li>&laquo;</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>&raquo;</li>
        </ul>
    </div>
)
};
export default Pagination;
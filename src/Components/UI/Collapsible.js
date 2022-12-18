import React, { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Collapsible = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='list-group'>
            <a onClick={() => setIsOpen(!isOpen)}>
                {props.label}
                {!isOpen && <div align="right" style={{position:"relative",top:"-30px", left:"-20px",color:  "#094372"}}><AiFillPlusCircle size="30px"/></div>}
                {isOpen && <div align="right" style={{position:"relative",top:"-30px", left:"-20px",color:  "#094372"}}><AiFillMinusCircle size="30px"/></div>}
            </a>
            {isOpen && <div className='content'>{props.children}</div>}
        </div>
    );
}

export default Collapsible;

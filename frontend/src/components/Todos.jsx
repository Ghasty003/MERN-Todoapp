import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";

function Todos({ todo }) {
    return (
        <div className='todo-container'>
            <div className='todos'>
                Hello
                <div>
                    <AiFillEdit size={25} cursor="pointer" />
                    <AiFillDelete size={25} cursor="pointer" />
                    <MdOutlineDownloadDone size={25} cursor="pointer" />
                </div>
            </div>
            <span>Time</span>
        </div>
    );
}

export default Todos;
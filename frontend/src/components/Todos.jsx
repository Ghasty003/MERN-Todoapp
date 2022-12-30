import React, { useContext } from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import TodosContext from '../context/TodosContext';

function Todos({ todo }) {

    const { dispatch } = useContext(TodosContext);

    const deleteTodo = async () => {
        const response = await fetch("http://localhost:4000/api/todos/"+ todo._id, {
            method: "DELETE",
        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error)
        }

        if (response.ok) {
            dispatch({type: "DELETE_TODO", payload: json});
        }
    }

    return (
        <div className='todo-container'>
            <div className='todos'>
                <p>{ todo.todo }</p>
                <div>
                    <AiFillEdit size={25} cursor="pointer" />
                    <AiFillDelete onClick={deleteTodo} size={25} cursor="pointer" />
                    <MdOutlineDownloadDone size={25} cursor="pointer" />
                </div>
            </div>
            <span>{todo.createdAt}</span>
        </div>
    );
}

export default Todos;
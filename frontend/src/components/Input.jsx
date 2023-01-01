import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../context/AuthContext';
import TodosContext from '../context/TodosContext';

function Input() {

    const [todo, setTodo] = useState("");
    const input = useRef("");

    const {dispatch} = useContext(TodosContext);

    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://mern-appl-wyiu.onrender.com/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({todo})
        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error);
        }

        if (response.ok) {
            dispatch({type: "CREATE_TODO", payload: json});
            input.current.blur();
            setTodo("");
        }
    }

    return (
        <form className='input' onSubmit={handleSubmit}>
            <input ref={input} type="text" placeholder='Enter a task...' value={todo} 
                onChange={e => setTodo(e.target.value)} 
            />
            <button>Go</button>
        </form>
    );
}

export default Input;
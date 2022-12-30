import React, { useEffect } from 'react';
import { useContext } from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';
import TodosContext from '../context/TodosContext';

function Home() {

    const {todos, dispatch} = useContext(TodosContext);

    useEffect(() => {

        const fetchTodos = async () => {
            const response = await fetch("http://localhost:4000/api/todos");
            const json = await response.json();

            dispatch({type: "FETCH_TODOS", payload: json});
        }

        fetchTodos();
        
    }, [dispatch]);

    return (
        <div className='home'>
            <h2>Todo app</h2>
            <Input />
            {
                todos && todos.map(todo => (
                    <Todos key={todo._id} todo={todo} />
                ))
            }
        </div>
    );
}

export default Home;
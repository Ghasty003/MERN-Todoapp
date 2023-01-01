import React, { useEffect } from 'react';
import { useContext } from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';
import AuthContext from '../context/AuthContext';
import TodosContext from '../context/TodosContext';

function Home() {

    const {todos, dispatch} = useContext(TodosContext);
    const { dispatch: Authdispatch, user } = useContext(AuthContext);

    useEffect(() => {

        const fetchTodos = async () => {
            const response = await fetch("https://mern-appl-wyiu.onrender.com/api/todos", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            dispatch({type: "FETCH_TODOS", payload: json});
        }

        fetchTodos();
        
    }, [dispatch]);

    const handleClick = () => {
        localStorage.removeItem("user");
        Authdispatch({type: "LOGOUT"});
        dispatch({type: "FETCH_TODOS"})
    }

    return (
        <div className='home'>
            <div>
                <p>Welcome, <span>{ user.userName }</span>.</p>
                <button onClick={handleClick}>Logout</button>
            </div>
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
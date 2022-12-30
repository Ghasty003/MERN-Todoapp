import React from 'react';
import { useContext } from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';
import TodosContext from '../context/TodosContext';

function Home() {

    const {todos, dispatch} = useContext(TodosContext);

    return (
        <div className='home'>
            <h2>Todo app</h2>
            <Input />
            {
                todos && todos.map(todo => (
                    <Todos key={todo} />
                ))
            }
        </div>
    );
}

export default Home;
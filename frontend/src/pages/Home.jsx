import React from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';

function Home() {
    return (
        <div className='home'>
            <h2>Todo app</h2>
            <Input />
            <Todos />
        </div>
    );
}

export default Home;
import React from 'react';

function Input() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='input' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter a task...' />
            <button>Go</button>
        </form>
    );
}

export default Input;
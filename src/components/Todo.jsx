import React from 'react';

// , actions: { toggleMark } }
// onChange={() => toggleMark(id)}
const Todo = ({ todo: { id, title, completed }}) => {
    return (
        <div className={`todo`}>
            <input type="checkbox" id={id} name={id} />
            <label htmlFor={id}>
                <strong className={`${completed ? ' completed' : ''}`}>{title}</strong>
            </label>
        </div>
    );
}

export default Todo;

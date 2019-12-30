import React from 'react';
import Delete from './Delete';

const Todo = ({ todo: { id, title, completed }, toggleMark, handleDelete }) => {
    return (
        <div className='todo'>
            <div className="todo-data">
                <input type="checkbox" id={id} name={id} defaultChecked={completed} onClick={() => toggleMark(id)} />
                <label htmlFor={id} className={`${completed ? 'completed' : ''}`}>
                    {title}
                </label>
            </div>
            <div className="actions">
                <Delete id={id} handleDelete={handleDelete} />
            </div>
        </div>
    );
}

export default Todo;

import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, toggleMark, handleDelete }) => {
    return (
        <div className="todos">
            <div className="data">
                {todos.map(t => (
                    <Todo todo={t} toggleMark={toggleMark} handleDelete={handleDelete} key={t.id} />
                ))}
            </div>
        </div>
    );
}

export default Todos;

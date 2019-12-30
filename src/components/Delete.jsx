import React from 'react';

const Delete = ({ id, handleDelete }) => {
    return (
        <button onClick={() => handleDelete(id)}>Delete</button>
    );
}
 
export default Delete;
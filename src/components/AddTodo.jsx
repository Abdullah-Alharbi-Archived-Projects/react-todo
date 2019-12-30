import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    _send = () => {
        this.props.handleAddTodo(this.state.value);
        this.setState({ value: '' })
    }

    render() { 
        return (
            <div className="add-todo">
                <input type="text" className="title" value={this.state.value} onChange={this.handleChange} />
                <button className="add" onClick={this._send}>Add</button>
            </div>
        );
    }
}

export default AddTodo;
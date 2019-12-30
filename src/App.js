import React, { Component } from 'react';
import { get, update, destroy } from './services/todos';
import Loading from './components/Loading';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [],
    loading: true
  }

  async componentDidMount() {
    const { data: todos } = await get();
    todos.splice(0, 190);
    this.setState({ todos, loading: false });
  }

  getTodo = id => {
    const todos = [...this.state.todos];
    const todo = todos.find(t => t.id === id);
    return [todos, todo];
  }

  toggleMark = async id => {
    const [todos, todo] = this.getTodo(id);
    todo.completed = !todo.completed;
    // eslint-disable-next-line no-unused-vars
    const response = await update(id, todo);
    // update state
    this.setState({ todos })
  }


  destroy = async id => {
    let todos = [...this.state.todos];
    todos = todos.filter(t => t.id !== id);
    // eslint-disable-next-line no-unused-vars
    const response = await destroy(id);
    console.log(response);
    this.setState({ todos });
  }

  render() { 
    // state
    const { todos, loading } = this.state;
    // actions
    const { toggleMark, destroy } = this;

    return (
      <div className="App">
        {loading && (<Loading />)}
        {!loading && (
          <header className="App-header">
            <h1>Todo app</h1>
            <Todos todos={todos} toggleMark={toggleMark} handleDelete={destroy} />
          </header>
        )}
      </div>
    );
  }
}

export default App;
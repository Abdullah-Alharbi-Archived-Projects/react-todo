import React, { Component } from 'react';
import { get } from './services/todos';
import Loading from './components/Loading';

class App extends Component {
  state = {
    todos: [],
    loading: true
  }

  async componentDidMount() {
    const { data: todos } = await get();
    todos.splice(0, 179);
    this.setState({ todos, loading: false });
  }

  render() { 
    const { loading } = this.state;
    return (
      <div className="App">
        {loading && (<Loading />)}
        {!loading && (
          <header className="App-header">
            <h1>Todo app</h1>
          </header>
        )}
      </div>
    );
  }
}

export default App;
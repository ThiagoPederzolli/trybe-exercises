// import React, { Component } from 'react'
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';
// // import TodoListClass from './components/TodoListClass';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       todos: [],      
//     }
//     this.addTodo = this.addTodo.bind(this);
//   }

//   addTodo(newTodo) {
//     this.setState((prevState) => ({
//       todos: prevState.todos.concat(newTodo),
//     }));
//   }

//   render() {
//     const { todos } = this.state;
//     return (
//       <main>
//         <TodoInput addTodo={this.addTodo} />
//         <TodoList todos={todos} />
//       </main>
//     )
//   }
// }

// export default App;

// import React, { useState } from 'react';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = (newTodo) => {
//     setTodos(todos.concat(newTodo));
//   }
//   return (
//     <main>
//       <TodoInput addTodo={ addTodo } />
//       <TodoList todos={ todos } />
//     </main>
//   );
// }

// export default App;

import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoProvider';
function App() {
  return (
    <main>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </main>
  );
}

export default App;
// import React, { Component } from 'react';

// class TodoList extends Component {
//   render() {
//     const { todos } = this.props;
//     return (
//       <ul>
//         {todos.map(todo => <li>{todo}</li>)}
//       </ul>
//     )
//   }
// }

// export default TodoList;

// import React from 'react';

// function TodoList({ todos }) {
//   // const { todos } = props;
//     return (
//     <ul>
//       {todos.map(todo => <li>{todo}</li>)}
//     </ul>
//   );
// }

// export default TodoList;

import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext)
  return ( 
    <ul>
      {todos.map(todo => <li>{todo}</li>)}
    </ul>
  );
}

export default TodoList;

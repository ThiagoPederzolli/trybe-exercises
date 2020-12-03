// import React, { Component } from 'react';

// class TodoInput extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newTodo: ''
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleChange({ target }) {
//     this.setState({
//       newTodo: target.value,
//     });
//   }
  
//   handleClick() {
//     const { addTodo } =  this.props;
//     const { newTodo } = this.state;
//     addTodo(newTodo);
//     this.setState({ newTodo: '' });
//   }

//   render() {
//     const { newTodo } = this.state;

//     return (
//       <section>
//         <label htmlFor="newTodo">
//           Insira uma tarefa:
//           <input
//             type="text"
//             value={newTodo}
//             onChange={this.handleChange}
//             name="newTodo"
//             id="newTodo"
//           />
//         </label>
//         <button
//           type="button"
//           onClick={this.handleClick}
//         >
//           Adicionar Tarefa
//         </button>
//       </section>
//     )
//   }
// }

// export default TodoInput;


// import React, { useState } from 'react';

// function TodoInput({ addTodo }) {
//   const [newTodo, setNewTodo] = useState('');

//   const handleChange = ({ target }) => {
//     setNewTodo(target.value)
//   }

//   const handleClick = () => {
//     addTodo(newTodo);
//     setNewTodo('');
//   }

//   return (
//     <section>
//       <label htmlFor="newTodo">
//         Insira uma tarefa:
//         <input
//           type="text"
//           value={ newTodo }
//           onChange={ handleChange }
//           name="newTodo"
//           id="newTodo"
//         />
//       </label>
//       <button
//         type="button"
//         onClick={handleClick}
//       >
//         Adicionar Tarefa
//       </button>
//     </section>
//   );
// }

// export default TodoInput;

import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';


function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext)

  const handleChange = ({ target }) => {
    setNewTodo(target.value)
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <section>
      <label htmlFor="newTodo">
        Insira uma tarefa:
        <input
          type="text"
          value={ newTodo }
          onChange={ handleChange }
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button
        type="button"
        onClick={handleClick}
      >
        Adicionar Tarefa
      </button>
    </section>
  );
}

export default TodoInput;

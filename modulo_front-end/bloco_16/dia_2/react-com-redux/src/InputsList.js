import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import addAssignment from './actions';

// class InputList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { textValue: '' };
//   }

//   render() {
//     const { add } = this.props;
//     const { textValue } = this.state;

//     return (
//       <div>
//         <input
//           placeholder="Digite a tarefa"
//           onChange={({ target }) => this.setState({ textValue: target.value })}
//         />
//         <button type="button" onClick={() => add(textValue)}>
//           Adicionar Tarefa
//         </button>
//       </div>
//     );
//   }
// }

// InputList.propTypes = {
//   add: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => {
//   {
//     add: value => dispatch(addAssignment(value));
//   }
// };

// export default connect(null, mapDispatchToProps)(InputList);
class InputsList extends Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => this.props.add(this.state.textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e)),
});

export default connect(null, mapDispatchToProps)(InputsList);

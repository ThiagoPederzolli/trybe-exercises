import React, { Component } from 'react';
import { connect } from 'react-redux';
import addClick from './actions';

class ButtonClicks extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>Clique Aqui</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addClick()),
});

export default connect(null, mapDispatchToProps)(ButtonClicks);

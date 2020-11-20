import React, { Component } from 'react';
import { connect } from 'react-redux';

class NumberClicks extends Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

const mapStateToProps = state => ({
  counter: state.clickReducer.counter,
});

export default connect(mapStateToProps)(NumberClicks);

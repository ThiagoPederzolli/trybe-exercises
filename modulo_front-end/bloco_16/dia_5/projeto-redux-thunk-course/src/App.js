import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchDogAction from './actions';

function App({ isFetching, src, fetchDog }) {
  return isFetching ? (
    <p>Loading</p>
  ) : (
    <div style={{ width: 500 }}>
      <button style={{ display: 'block' }} onClick={fetchDog} type="button">
        Novo Doguinho
      </button>
      <img style={{ width: '100%' }} src={src} alt="dog" />
    </div>
  );
}

const mapStateToProps = state => ({
  src: state.reducer.imagePath,
  isFetching: state.reducer.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchDog: () => dispatch(fetchDogAction()),
});

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  fetchDog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

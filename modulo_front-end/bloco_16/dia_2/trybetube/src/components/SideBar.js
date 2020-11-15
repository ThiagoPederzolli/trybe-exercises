import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectMovie from '../actions/movieAction';

class SideBar extends Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <aside>
        {categories.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map(movie => (
                <li key={movie.id}>
                  {movie.title} was released in {movie.released}
                  <button
                    type="button"
                    onClick={() => selectMovie(category, movie)}
                  >
                    Selecionar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

SideBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  // a chave do objeto será a prop e o valor será a informação que a prop vai ter.

  // Acessando a informação:
  // state = estado do Redux
  // movieReducer, gaveta desse reducer,
  // categiries = categorias dentro da gaveta movieReducer
  categories: state.movieReducer.categories,
});

const mapDispatchToProps = dispatch => ({
  selectMovie: (category, movie) => dispatch(selectMovie(category, movie)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

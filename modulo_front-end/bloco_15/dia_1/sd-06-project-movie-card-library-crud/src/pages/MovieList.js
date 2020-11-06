import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };

    this.renderMovieList = this.renderMovieList.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await movieAPI.getMovies();
      console.log(requestReturn);
      // const requestMovie = await requestReturn.json();
      this.setState(({ movies }) => ({
        loading: false,
        movies: [...movies, ...requestReturn],
      }));
    });
  }

  renderMovieList() {
    return (
      <div data-testid="movie-list">
        {this.state.movies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div>
        <div>{loading ? <Loading /> : this.renderMovieList()}</div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;

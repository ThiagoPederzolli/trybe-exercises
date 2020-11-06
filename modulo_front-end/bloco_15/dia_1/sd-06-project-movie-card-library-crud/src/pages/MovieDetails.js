import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: '',
    };
    this.renderMovie = this.renderMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  // async fetchMovie() {
  //   const movieId = this.props.match.params.id;
  //   const movie = await movieAPI.getMovie(movieId);
  //   console.log(movie);
  //   return movie;
  // }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const movieId = this.props.match.params.id;
      const movie = await movieAPI.getMovie(movieId);
      this.setState(() => ({
        movie: movie,
        loading: false,
      }));
    });
  }

  deleteMovie() {
    const movieId = this.props.match.params.id;
    movieAPI.deleteMovie(movieId);
  }

  renderMovie({ id, title, storyline, imagePath, genre, rating, subtitle }) {
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={this.deleteMovie}>
          DELETAR
        </Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    // const movie = this.fetchMovie();

    // console.log(this.state.movie);
    // const {
    //   title,
    //   storyline,
    //   imagePath,
    //   genre,
    //   rating,
    //   subtitle,
    // } = this.state.movie;

    const { loading, movie } = this.state;

    return (
      <div data-testid="movie-details">
        <div>{loading ? <Loading /> : this.renderMovie(movie)}</div>
      </div>
    );
  }
}

export default MovieDetails;

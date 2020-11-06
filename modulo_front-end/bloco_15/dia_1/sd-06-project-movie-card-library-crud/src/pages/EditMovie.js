import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({}, async () => {
      const movieId = this.props.match.params.id;
      const movie = await movieAPI.getMovie(movieId);
      this.setState(() => ({
        movie: movie,
        status: '',
      }));
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI
      .updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        {/* {loading ? (
          <Loading />
        ) : ( */}
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        {/* )} */}
      </div>
    );
  }
}

export default EditMovie;

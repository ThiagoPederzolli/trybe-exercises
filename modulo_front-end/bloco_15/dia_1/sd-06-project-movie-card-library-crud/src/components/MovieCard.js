import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={imagePath} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{storyline}</p>
        </div>
        <div>
          <p>
            {genre} <span>Rating: {rating}</span>
          </p>
        </div>
        <Link data-testid={`${title}Details`} to={`movies/${id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;

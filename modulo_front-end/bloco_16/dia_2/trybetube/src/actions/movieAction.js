function selectMovie(category, movie) {
  return {
    type: 'SELECT_MOVIE',
    category,
    movie,
  };
}

export default selectMovie;

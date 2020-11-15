import categories from '../data';

const INITIA_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [...categories],
};
function movieReducer(state = INITIA_STATE, action) {
  const { payload } = action;
  if (action.type === 'SELECT_MOVIE') {
    return {
      ...state,
      selectedCategory: payload.category,
      selectedMovie: payload.movie,
    };
  }
  return state;
}
export default movieReducer;

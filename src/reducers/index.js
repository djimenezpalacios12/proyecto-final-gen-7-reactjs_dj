const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_MOVIES_SEARCH":
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

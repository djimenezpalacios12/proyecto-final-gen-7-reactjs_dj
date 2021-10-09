const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_MOVIES":
      return {
        ...state,
        IntialMovies: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

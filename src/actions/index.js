export const setLoading = (payload) => ({
  type: "SET_LOADING",
  payload,
});

// selectors
export const getLoading = (state) => state.loading;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers/index";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./routes/App";

const initialState = {
  loading: false,
  movies: [],
};

// Manejador de store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

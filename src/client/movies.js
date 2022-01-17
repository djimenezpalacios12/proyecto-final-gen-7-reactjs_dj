import client from "./client";

const api_key = "api_key=";

// Peliculas de Página inicial
export const categoryList = () => {
  return client.get(`/discover/movie?sort_by=popularity.desc&${api_key}`);
};

// Cartelera de Peliculas
export const theatresMovies = (value) => {
  return client.get(
    `/discover/movie?primary_release_date.gte=${value}-01-01&primary_release_date.lte=${value}-12-25&${api_key}`
  );
};

// Buscador Peliculas
export const getMovieInfo = (value) => {
  return client.get(`/search/movie?${api_key}&query=${value}&page=1`);
};

// Top rated
export const getTopRated = () => {
  return client.get(`/movie/top_rated?${api_key}`);
};

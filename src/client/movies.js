import client from "./client";

const api_key = "api_key=4029d79d74e42928c21cfa6bcdf1eda4";

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

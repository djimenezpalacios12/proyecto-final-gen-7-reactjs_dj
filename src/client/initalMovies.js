import client from "./client";

// Peliculas de Página inicial
export const categoryList = () => {
  return client.get(
    `/discover/movie?sort_by=popularity.desc&api_key=4029d79d74e42928c21cfa6bcdf1eda4`
  );
};

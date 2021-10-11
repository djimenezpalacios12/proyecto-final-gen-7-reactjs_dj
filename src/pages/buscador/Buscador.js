import React, { Fragment, useEffect, useState } from "react";
import { getMovieInfo } from "../../client/movies";

const Buscador = () => {
  const [movies, setMovies] = useState([]);

  // TODO: completar formulario sencillo de busqueda
  useEffect(() => {
    getMovieInfo("")
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(movies);

  return (
    <Fragment>
      <div className="margenes">Buscador</div>
    </Fragment>
  );
};

export default Buscador;

//tt0187078

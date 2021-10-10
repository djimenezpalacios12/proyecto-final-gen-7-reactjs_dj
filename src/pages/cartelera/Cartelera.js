import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { LinearProgress, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PosterContent from "../../components/poster/PosterContent";
import { theatresMovies } from "../../client/movies";
import MediaCard from "../../components/card/Card";
import InputField from "../../components/inputField/inputField";

const Cartelera = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    console.log(values.año);
    if (values.año) {
      setLoading(true);
      theatresMovies(values.año)
        .then((data) => {
          setMovies(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      console.log("Valor Vacio");
    }
  };

  console.log(movies);

  // TODO: Mejorar validacion de input
  // TODO: Corregir scroll de card

  return (
    <Formik
      initialValues={{
        año: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => {
        // console.log(values.año.getFullYear());

        return (
          <Form id="">
            <div className="margenes">
              <div className="">{loading ? <LinearProgress /> : null}</div>

              <div className="row d-flex justify-content-center mt-4 m-2">
                <PosterContent Boostrapt="col-12 col-lg-10 text-center text-info">
                  <h3>{`Cartelera ${values.año}`}</h3>
                </PosterContent>

                <PosterContent Boostrapt="col-12 col-lg-10 text-center d-flex align-items-center">
                  <span>Consultar estrenos por año: </span>
                  <InputField
                    id="año"
                    name="año"
                    type="text"
                    fullWidth
                    label="Año"
                    margin="none"
                    size="small"
                    value={values.año}
                    onChange={handleChange}
                    className="mx-2"
                  />

                  <Button type="submit" variant="contained" color="primary">
                    <Search />
                  </Button>
                </PosterContent>

                <div className="">
                  <MediaCard movies={movies} />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Cartelera;

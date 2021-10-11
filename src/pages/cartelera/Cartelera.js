import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PosterContent from "../../components/poster/PosterContent";
import { theatresMovies } from "../../client/movies";
import MediaCard from "../../components/card/Card";
import InputField from "../../components/inputField/inputField";
// React
import { setLoading } from "../../actions/index";
import { useDispatch } from "react-redux";

const Cartelera = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (values.año) {
      dispatch(setLoading(true));
      theatresMovies(values.año)
        .then((data) => {
          setMovies(data.results);
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoading(false));
        });
    } else {
      console.log("Valor Vacio");
    }
  };

  return (
    <Formik
      initialValues={{
        año: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => {
        return (
          <Form id="">
            <div className="margenes">
              <div className="row d-flex justify-content-center mt-4 m-2">
                <PosterContent Boostrapt="col-12 col-lg-10 text-center text-info">
                  <h3>{`Cartelera ${values.año}`}</h3>
                </PosterContent>

                <PosterContent Boostrapt="col-12 col-lg-10 text-center d-flex align-items-center">
                  <span className="text-secondary">
                    Consultar estrenos por año:{" "}
                  </span>
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
                    placeholder="2021"
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

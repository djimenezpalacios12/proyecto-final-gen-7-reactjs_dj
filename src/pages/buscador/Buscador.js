import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PosterContent from "../../components/poster/PosterContent";
import InputField from "../../components/inputField/inputField";
import useSearch from "../../hooks/useSearch";
import MediaCard from "../../components/card/Card";

const Buscador = () => {
  const { getMovie, movie } = useSearch();

  const handleSubmit = (values) => {
    console.log(values.nameMovie);
    getMovie(values.nameMovie);
  };

  return (
    <Formik
      initialValues={{
        nameMovie: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => {
        return (
          <Form id="">
            <div className="margenes">
              <div className="row d-flex justify-content-center mt-4 m-2">
                <PosterContent Boostrapt="col-12 col-lg-10 text-center d-lg-flex align-items-center">
                  <span className="text-secondary">
                    Nombre de la Película:{" "}
                  </span>
                  <InputField
                    id="nameMovie"
                    name="nameMovie"
                    type="text"
                    fullWidth
                    label="Nombre"
                    margin="none"
                    size="small"
                    value={values.nameMovie}
                    onChange={handleChange}
                    className="m-2"
                    placeholder="Alien"
                  />

                  <Button type="submit" variant="contained" color="primary">
                    <Search />
                  </Button>
                </PosterContent>

                <div>
                  <MediaCard movies={movie} />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Buscador;

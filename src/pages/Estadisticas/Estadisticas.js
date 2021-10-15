import { Fragment, useState, useEffect } from "react";
import { getTopRated } from "../../client/movies";
import { setLoading } from "../../actions/index";
import PosterContent from "../../components/poster/PosterContent";
import { useDispatch } from "react-redux";
import MyResponsiveBar from "../../components/barChart/MyResponsiveBar";
import "./style.css";

const Estadisticas = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    getTopRated()
      .then((data) => {
        setMovies(data.results);
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  return (
    <Fragment>
      <div className="margenes">
        <div className="row d-flex justify-content-center mt-4 m-2">
          <PosterContent Boostrapt="col-12 col-lg-10 text-center text-info">
            <h3>Estadísticas</h3>
            <h6>Popularity</h6>
          </PosterContent>

          <PosterContent Boostrapt="col-12 col-lg-10 text-center text-info">
            <div className="heightChart">
              <MyResponsiveBar data={movies} />
            </div>
          </PosterContent>
        </div>
      </div>
    </Fragment>
  );
};

export default Estadisticas;

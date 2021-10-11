import { useState } from "react";
import { getMovieInfo } from "../client/movies";
import { setLoading } from "../actions/index";
import { useDispatch } from "react-redux";

const useSearch = (nameMovie) => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  async function getMovie(nameMovie) {
    dispatch(setLoading(true));
    try {
      const data = await getMovieInfo(nameMovie);
      setMovie(data.results);
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  }

  return { movie, getMovie };
};

export default useSearch;

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import propType from "prop-types";

import "./style.css";

export default function MediaCard({ movies }) {
  return (
    <div className="row d-flex justify-content-center">
      {movies &&
        movies.map((movie, index) => {
          return (
            <div className="col-12 col-lg-3 m-2" key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                className="shadow mb-5 heightCard overflow-scroll"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.original_title}
                  </Typography>
                  <Typography variant="subtitle2" className="text-secondary">
                    {movie.release_date}
                  </Typography>
                  <Typography variant="body2" className="text-secondary ">
                    {movie.overview}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

// PropsType
MediaCard.propType = {
  movies: propType.object,
};

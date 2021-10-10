import React, { Fragment, useEffect, useState } from "react";
import { ImageList, ImageListItem, LinearProgress } from "@material-ui/core";
import { categoryList } from "../client/movies";
import PosterContent from "../components/poster/PosterContent";

const InitialPage = () => {
  const [moviePhoto, setMoviePhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    categoryList()
      .then((data) => {
        setMoviePhoto(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <div className="margenes">
        <div className="">{loading ? <LinearProgress /> : null}</div>

        <div className="row d-flex justify-content-center mt-4 m-2">
          <PosterContent Boostrapt="col-12 col-lg-10 text-center text-info">
            <h3>¡Bienvenido!</h3>
          </PosterContent>

          <PosterContent Boostrapt="col-12 col-lg-10 text-secondary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada
              mollis, varius cras eget bibendum nostra erat mi imperdiet neque
              aliquet, euismod purus ut penatibus libero eu sem nascetur.
              Tristique praesent lobortis luctus ligula molestie ornare inceptos
              morbi eleifend, mi ut placerat justo sem suscipit metus nisl,
              viverra primis potenti tempus tellus aptent phasellus semper.
              Praesent eros nunc sodales suspendisse facilisi in vulputate
              tristique diam fermentum semper placerat, odio accumsan viverra
              euismod tincidunt enim volutpat duis faucibus nullam suscipit. Sed
              blandit etiam leo feugiat augue diam suspendisse eros taciti,
              morbi luctus nullam potenti nam semper ligula nibh. Senectus proin
              integer viverra tincidunt dictum feugiat torquent rhoncus,
              ullamcorper sollicitudin sed interdum ultricies commodo risus,
              massa pharetra dictumst fermentum nisi eu quam. Cras fringilla
              pulvinar sociis et mus rutrum suscipit, cum lobortis mattis
              egestas pretium ac curabitur, odio per venenatis netus phasellus
              etiam. Nulla hendrerit pretium feugiat platea suspendisse blandit
              sociosqu et mollis, pellentesque viverra ullamcorper tortor velit
              sed taciti aliquet felis in, suscipit ligula dapibus dui ut
              praesent magna non. Purus curabitur pellentesque fermentum eget
              vulputate id tristique tortor quis potenti, ullamcorper tellus
              morbi orci hac vivamus gravida bibendum scelerisque pharetra,
              tempor pretium ante ridiculus cubilia blandit senectus fringilla
              volutpat. Massa etiam quam leo tempus laoreet euismod, posuere
              luctus velit class ac metus, ultricies viverra vel elementum
              dignissim. Suspendisse pulvinar semper parturient luctus praesent
              magna molestie mus curabitur viverra quisque, tempus porta pretium
              justo tristique sollicitudin integer interdum nam.
            </p>
          </PosterContent>

          <PosterContent Boostrapt="col-12 col-lg-10">
            <ImageList
              cols={3}
              rowHeight={164}
              sx={{ width: 500, height: 450 }}
            >
              {moviePhoto.map((item) => (
                <ImageListItem key={item.original_title}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                    loading="lazy"
                    width="10%"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </PosterContent>
        </div>
      </div>
    </Fragment>
  );
};

export default InitialPage;

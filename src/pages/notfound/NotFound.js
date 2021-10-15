import { Fragment } from "react";
import notFound from "../../assets/notFound.png";

const NotFound = () => {
  return (
    <Fragment>
      <div className="margenes">
        <div className="row text-center d-flex align-self-center">
          <div className="col-auto">
            <img src={notFound} alt="poster-notfound" width="40%" />
            <h1 className="text-danger">ERROR 404</h1>
            <h3>PAGE NOT FOUND</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;

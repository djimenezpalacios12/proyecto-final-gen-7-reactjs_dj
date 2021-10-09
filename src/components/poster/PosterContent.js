import React, { Fragment } from "react";

const PosterContent = ({ Boostrapt, children }) => {
  return (
    <Fragment>
      <div
        className={`${Boostrapt} border rounded p-2 bg-white shadow p-3 mb-5 bg-white rounded`}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default PosterContent;

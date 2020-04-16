import React from "react";
import "./styles/NotFound.css";
import error404 from "../images/perdido.png";

function NotFound() {
  return (
    <div className="Notfound">
      <div className="container">
        <div className="row">
          <div className="Notfound__col col-12 col-md-6">
            <h1>
              Error 404! <br />
              Page not found
            </h1>
          </div>

          <div className="Notfound__col col-md-6">
            <img
              src={error404}
              alt="Error 404"
              className="Notfound__col-img img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div className='container h-100 error'>
        <div className='row d-flex justify-content-center align-items-center flex-column'>
          <h1 className='error-code text-danger'> Error 404 !!!</h1>
          <br />
          <p className='error-text text-info'>
            Page Couldn't Found <FontAwesomeIcon icon={faExclamationTriangle} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import "./ErrorPage.css";
import commingSoon from "../../logos/commingSoon.png";

const CommingSoon = () => {
  return (
    <div>
      <div className='container h-100 error mt-5 mb-0'>
        <div className='row d-flex justify-content-center align-items-center flex-column'>
          <h1 className='comming-soon'>!!!... Comming Soon ...!!!</h1>
          <br />
          <img src={commingSoon} alt='' style={{ height: "280px" }} />
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;

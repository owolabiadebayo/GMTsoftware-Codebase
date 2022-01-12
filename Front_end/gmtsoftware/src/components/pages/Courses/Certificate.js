import React from "react";
import "./Certificate.css";

function Certificate() {
  return (
    <div className="background">
      <form className=" p-5 rounded d-flex justify-content-center align-item-center ">
        <div className="form-row">
          <h1 className="text-center text-white display-1">
            Welcome to our Certificate Authentication Portal
          </h1>
          <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              name="fname"
              placeholder="Input your Certication Nos"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Certificate;

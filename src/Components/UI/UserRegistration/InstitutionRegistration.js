import React from "react";
import Helmet from "react-helmet";
import institutionImage from "../images/institution.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import "./institutionRegistration.css";

const institutionRegistration = () => {
  return (
    <div className="institution-registation">
      <div className="row">
        <div className="col-lg-8 img-col">
          <img src={institutionImage} alt="institution" />
        </div>
        <div className="col-lg-3 col-md-6 text-col">
          <h1 className="signup mt-5 mb-5">Register Institution Account</h1>
          <p>Please enter your details below</p>
          <form className="mx-1 mx-md-4">
            <div className="d-flex flex-row align-items-center mb-4 form-body">
              <FontAwesomeIcon
                className="font-icon"
                style={{ fontSize: "large" }}
                icon={faUser}
              ></FontAwesomeIcon>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon
                className="font-icon"
                style={{ fontSize: "large" }}
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon
                className="font-icon"
                style={{ fontSize: "large" }}
                icon={faLock}
              ></FontAwesomeIcon>
              <input type="password" placeholder="Your Password" />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FontAwesomeIcon
                className="font-icon"
                style={{ fontSize: "large" }}
                icon={faKey}
              ></FontAwesomeIcon>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="form-check mb-5 institution-types">
              <h3 className="mb-4" style={{ textAlign: "left" }}>
                Type of Institutions
              </h3>
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              />
              <label className="form-check-label">Public </label>
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              />
              <label className="form-check-label">Private </label>
            </div>
            <div className="form-check d-flex justify-content-center mb-5">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              />
              <label className="form-check-label">
                I agree all statements in{" "}
                <a href="#!" className="text-body">
                  <u>Terms of service</u>
                </a>
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
              >
                Register
              </button>
            </div>
            <p className="text-center text-muted mt-5 mb-0">
              Have already an account?{" "}
              <a href="/logIn" className="fw-bold text-body">
                <u>Login here</u>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default institutionRegistration;

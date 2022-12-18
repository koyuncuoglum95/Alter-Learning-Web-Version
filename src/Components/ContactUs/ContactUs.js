import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact_us.css";
import { Link } from "react-router-dom";
import vrImage from "../ContactUs/contact_image/contact-us.png";
import Helmet from "react-helmet";

function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, subject, message } = data;
    alert(`${name} : Thanks for contacting us.`);
    reset();
  };

  return (
    <>
      {/* Please do not touch the code below { Helmet } */}
      <Helmet>
        <title>Alter Learning Educational Platform - Contact Us</title>
        <meta
          name="description"
          content="Alter Learning Educational Platform - Contact Us"
        />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

      <div className="contact-us">
        <div className="row">
          <div className="col-sm">
            <div className="left-col">
              <div className="contact-header">
                <h2>Contact Us</h2>
                <hr />
                <p className="body-contact">
                  Greetings traveler! Do you have a question for our team?
                  Please email us below, our representatives are happy to assist
                  you!
                </p>
                <hr />
              </div>
              <div className="contac-form">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="form"
                >
                  <div className="form-control">
                    <label>YOUR NAME: </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                    <label>YOUR EMAIL: </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                    <label>SUBJECT: </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 70,
                          message: "Subject cannot exceed 70 characters",
                        },
                      })}
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                    <label>MESSAGE: </label>
                    <textarea
                      type="text"
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                  <div className="buttons">
                    <Link to="/" className="btn btn-outline homeButton">
                      <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                      <span>BACK TO HOME</span>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-outline emailButton"
                    >
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      <span> SEND EMAIL </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm right-col">
            <img src={vrImage} alt="vr-goggles" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

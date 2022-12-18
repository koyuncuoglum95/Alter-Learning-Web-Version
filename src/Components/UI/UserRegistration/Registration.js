import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./registration.css";
<<<<<<< HEAD:src/Components/UserLogins/Registration.js
import register from "./images/register.png";
import { MdFamilyRestroom } from "react-icons/md";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
=======
import register from "../images/register.png";
import {
  faBuildingColumns,
  faChalkboardTeacher,
  faChalkboardUser,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> 34eeb21d5144e20a8145cd99761268b9d0d8aad5:src/Components/UI/UserRegistration/Registration.js

const Registration = () => {
  return (
    <div className="registration">
      <div className="row">
        <div className="col-lg-8 col-left">
          <img className="login_img" src={register} alt="login image" />
        </div>
        <div className="col-sm col-right">
          <div className="login-txt">
            <h5 className="already_logIn_txt">
              Already have an account? <a href="/logIn">Log In</a>
            </h5>
          </div>

          <div className="main-body">
            <div className="join-us">
              <h1>Join Us!</h1>
              <p style={{ textAlign: "left", marginLeft: 0, marginBottom: 20 }}>
                {" "}
                To begin this journey, tell us what type of account you’d be
                opening.
              </p>
            </div>
            <div className="four-buttons">
<<<<<<< HEAD:src/Components/UserLogins/Registration.js
              <a href="/teacherRegister" className="teacher-button">
                <button className="btn">
                <FaChalkboardTeacher className="fontawesome"/>
                  <span>TEACHERS</span>
                  <p>Personalized lesson plans</p>
                </button>
              </a>
              <a href="/family/tutorRegister" className="parents-button">
                <button className="btn">
                  <MdFamilyRestroom className="fontawesome"/>
                  <span>FAMILY / TUTORS</span>
                  <p>Safe & Collaborative STEAM Ecosystem</p>
                </button>
              </a>
              <a href="/institutionRegister" className="institution-button">
                <button className="btn">
=======
              <div className="teacher-button">
                <Link to="/teacherRegistration" className="btn">
                  <FontAwesomeIcon
                    className="fontawesome"
                    icon={faChalkboardTeacher}
                  ></FontAwesomeIcon>
                  <span>TEACHERS</span>
                  <p>Personalized lesson plans</p>
                </Link>
              </div>
              <div className="parents-button">
                <Link to="/parentsRegistration" className="btn">
                  <FontAwesomeIcon
                    className="fontawesome"
                    icon={faPeopleGroup}
                  ></FontAwesomeIcon>
                  <span>PARENTS AND OR GUARDIAN</span>
                  <p>Safe & Collaborative STEAM Ecosystem</p>
                </Link>
              </div>
              <div className="institution-button">
                <Link to="/institutionRegistration" className="btn">
>>>>>>> 34eeb21d5144e20a8145cd99761268b9d0d8aad5:src/Components/UI/UserRegistration/Registration.js
                  <FontAwesomeIcon
                    className="fontawesome"
                    icon={faBuildingColumns}
                  ></FontAwesomeIcon>
                  <span>INSTITUTIONS</span>
                  <p>Cutting edge technology education environement</p>
<<<<<<< HEAD:src/Components/UserLogins/Registration.js
                </button>
              </a>
              <a href="/studentRegister" className="teacher-button">
                <button className="btn">
                  <FaUserGraduate className="fontawesome"/>
                  <span>STUDENTS</span>
                  <p>Fun STEAM Platform, gamification of education</p>
                </button>
              </a>
=======
                </Link>
              </div>
              <div className="student-button">
                <Link to="/studentRegistration" className="btn">
                  <FontAwesomeIcon
                    className="fontawesome"
                    icon={faChalkboardUser}
                  ></FontAwesomeIcon>
                  <span>STUDENTS</span>
                  <p>Fun STEAM Platform, gamification of education</p>
                </Link>
              </div>
>>>>>>> 34eeb21d5144e20a8145cd99761268b9d0d8aad5:src/Components/UI/UserRegistration/Registration.js
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

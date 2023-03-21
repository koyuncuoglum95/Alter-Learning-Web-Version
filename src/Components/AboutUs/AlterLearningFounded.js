import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsInstagram, BsPeople } from "react-icons/bs";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineHome, AiOutlineFire } from "react-icons/ai";
import "./alter_learning_founded.css";


const AlterLearningFounded = () => {
    let  navigate = useNavigate();
    return (
      <div className="main_alter_lg_founded_container">
        <div className="inner_alter_lg_founded_content_box">
          {/* Alter learning founded text content */}
          <div className="main_inner_first_alter_lg_founded_text_container">
            <div className="inner_first_alter_lg_founded_text_content_box">
              <div className="first_alter_lg_founded_outer_line"></div>
              <div className="first_alter_lg_founded_text_box">
                <h4>When was Alter Learning created?</h4>
                <h5>Our journey began in 2019.</h5>
              </div>
              <div className="first_alter_lg_founded_text_box">
                <h4>Where was Alter Learning founded?</h4>
                <h5>Davis, California.</h5>
              </div>
              <div className="first_alter_lg_founded_text_box">
                <h4>Why Alter Learning?</h4>
                <h5>We make learning fun!</h5>
              </div>
              <div className="first_alter_lg_founded_invite">
                <h6>
                  Discover more about the dedicated team members here at Alter
                  Learning :
                </h6>
              </div>
              <div className="first_alter_lg_founded_people_container">
                <div className="first_alter_lg_founded_people_box">
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://www.instagram.com/alterlearning_/";
                    }}
                  >
                    <BsPeople className="first_alter_founded_icon_people_icon" />
                    <span>LEARN ABOUT OUR TEAM</span>
                  </button>
                </div>
                <div className="first_alter_lg_founded_social_links_box">
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://www.instagram.com/alterlearning_/";
                    }}
                  >
                    <BsInstagram className="first_alter_founded_icon instagram_icon" />
                    <span>VISIT US ON INSTAGRAM</span>
                  </button>
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://www.facebook.com/Alter-Learning-100915929258972/";
                    }}
                  >
                    <FiFacebook className="first_alter_founded_icon facebook_icon" />
                    <span>VISIT US ON FACEBOOK</span>
                  </button>
                </div>
                <div className="first_alter_lg_founded_social_links_box">
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/company/alter-learning-educational-platform-inc/";
                    }}
                  >
                    <FiLinkedin className="first_alter_founded_icon linkedin_icon" />
                    <span>VISIT US ON LINKEDIN</span>
                  </button>
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://twitter.com/alter_learning?s=20&t=xce7UZ35vuzPGOmSLhJihw";
                    }}
                  >
                    <FiTwitter className="first_alter_founded_icon twitter_icon" />
                    <span>VISIT US ON TWITTER</span>
                  </button>
                </div>
                <div className="alter_founded_custom_icons_links_box">
                <button
                    onClick={() => {
                      window.location.href =
                        "http://localhost:3000/"; // Remember to change the url for root page
                    }}
                  >
                    <AiOutlineHome className="first_alter_founded_custom_icon" />
                    <span>BACK TO HOME</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/games');
                    }}
                  >
                    <AiOutlineFire className="first_alter_founded_custom_icon" />
                    <span>BACK TO GAMES</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Alter learning founded image content */}
          <div className="first_alter_lg_founded_images_box"></div>
        </div>
      </div>
    );
}


export default AlterLearningFounded;

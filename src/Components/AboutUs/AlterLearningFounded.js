import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineHome, AiOutlineFire } from "react-icons/ai";
import "./alter_learning_founded.css";


const AlterLearningFounded = () => {
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
              <div className="first_alter_lg_founded_social_media_container">
                <div className="first_alter_lg_founded_social_links_box">
                  <a href="https://www.instagram.com/alterlearning_/" target="_blank" rel="noreferrer">
                    <BsInstagram className="first_alter_founded_icon instagram_icon" />
                    <span>INSTAGRAM</span>
                  </a>
                  <a href="https://www.facebook.com/Alter-Learning-100915929258972/" target="_blank" rel="noreferrer">
                    <FiFacebook className="first_alter_founded_icon facebook_icon" />
                    <span>FACEBOOK</span>
                  </a>
                </div>
                <div className="first_alter_lg_founded_social_links_box">
                  <a href="https://www.linkedin.com/company/alter-learning-educational-platform-inc/" target="_blank" rel="noreferrer">
                    <FiLinkedin className="first_alter_founded_icon linkedin_icon" />
                    <span>LINKEDIN</span>
                  </a>
                  <a href="https://twitter.com/alter_learning?s=20&t=xce7UZ35vuzPGOmSLhJihw" target="_blank" rel="noreferrer">
                    <FiTwitter className="first_alter_founded_icon twitter_icon" />
                    <span>TWITTER</span>
                  </a>
                </div>
                <div className="alter_founded_custom_icons_links_box">
                  <Link to="/">
                    <AiOutlineHome className="first_alter_founded_custom_icon" />
                    <span>HOME</span>
                  </Link>
                  <Link to="/games">
                    <AiOutlineFire className="first_alter_founded_custom_icon" />
                    <span>GAMES</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Alter learning founded image content */}
          <div className="first_alter_lg_founded_images_box">

          </div>
        </div>
      </div>
    );
}


export default AlterLearningFounded;

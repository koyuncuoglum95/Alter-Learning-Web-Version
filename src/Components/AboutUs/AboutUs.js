import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineFire } from "react-icons/ai";
import "./About_us.css";
import WhoIsAlter from './WhoIsAlter';
import AlterLearningFounded from './AlterLearningFounded';
import Helmet from 'react-helmet';

const AboutUs = () => {
  let  navigate = useNavigate();
  const GoGames = () => {
    navigate('/games');
  }
    return (
      <>
      <Helmet>
        <title>Alter Learning Educational Platform - About Us</title>
        <meta name="description" content="Alter Learning Educational Platform - About Us" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

        <div className="main_about_us_container">
          <div className="inner_about_us_container">
            <div className="first_about_us_contents_box">
                {/* About us box one */}
                <div className="first_about_us_item_box">
                  <div className="first_about_us_item_text_box">
                    <div className="first_about_us_hero_text_box">
                      <h4>What is Alter Learning?</h4>
                      <h5>We build educational video games</h5>
                    </div>

                    <div className="first_about_us_text_box">
                      <p>We innovate learning using <strong>XR (Extended Reality)</strong><br></br> <strong>XR</strong> is a combo of <strong>AR (Augmented Reality)</strong> and <strong>VR (Virtual Reality)</strong></p>
                    </div>

                    <div className="second_about_us_text_box">
                      <p>We´re a secure, cloud-based platform supporting students and educators in both online and face-to-face classes.</p>
                    </div>

                    <div className="third_about_us_text_box">
                      <p>Our games supplement learning materials across K-12 students helping families, educators, institutions, and school districts</p>
                    </div>

                    <div className="fourth_about_us_text_box">
                      <p>Alter Learning is a growing team of professionals comprised of educators, game developers, designers, and artists. We have the common goal of creating meaningful content that´s fun, accessible, and educational.</p>
                    </div>
                    <div className="first_about_us_link_box">
                      <button
                        onClick={GoGames}
                      >
                        <AiOutlineFire className="about_us_link_icon" />
                        <span>TAKE ME TO THE GAME LIBRARY</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* About us image box two */}
                <div className="first_about_us_image_box_one"></div>
              </div>
            
            {/* Who is Alter Learning */}
            <WhoIsAlter />

            {/* When Alter Learning was founded */}
            <AlterLearningFounded />
          </div>
        </div>
      </>
    );
}


export default AboutUs;

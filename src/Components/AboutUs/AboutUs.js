import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFire } from "react-icons/ai";
import "./About_us.css";
import WhoIsAlter from './WhoIsAlter';
import AlterLearningFounded from './AlterLearningFounded';
import Helmet from 'react-helmet';


const AboutUs = () => {
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
                      <h5>Alter Learning is a scientifically-based Educational Gaming platform.</h5>
                    </div>

                    <div className="first_about_us_text_box">
                      <p>We innovate learning through XR (Extended Reality), which is the combination of AR (Augmented Reality), Mixed Reality (MR), and VR (Virtual Reality).</p>
                    </div>

                    <div className="first_about_us_text_box">
                      <p>We are a secure, cloud-based platform supporting students and educators in both online and face-to-face classes.</p>
                    </div>

                    <div className="first_about_us_text_box">
                      <p>Our games supplement learning materials for K-12 students, and augment the educational experience for children, families, educators, institutions, and school districts.</p>
                    </div>

                    <div className="first_about_us_text_box">
                      <p>Alter Learning is an evolving team of professionals drawing from their experience as scientists, educators, parents, engineers, game developers, and artists. We have the shared vision of creating accessible, impactful, innovative, and fun educational content.</p>
                    </div>

                    <div className="first_about_us_link_box">
                      <Link to="/games">
                        <AiOutlineFire className="about_us_link_icon" />
                        <span>GAMES LIBRARY</span>
                      </Link>
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

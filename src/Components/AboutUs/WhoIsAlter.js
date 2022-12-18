import React from 'react';
import { Link } from 'react-router-dom';
import { BsDot } from "react-icons/bs";
import "./who_Is_alter.css";


const WhoIsAlter = () => {
    return (
      <div className="main_who_we_are_container">
        <div className="inner_who_we_are_container">
          <div className="who_we_are_items_container">

            {/* box one */}
            <div className="who_we_are_item">
              <div className="who_we_are_item_image_box_1"></div>

              <div className="who_we_are_item_info_box">
                <h4>Who is Alter Learning for?</h4>
                <h5>Teachers and Tutors</h5>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                   <BsDot className="who_we_are_icon" />
                   Built for K-12 students. Our products are designed to make Edu-Learning fun.
                  </p>
                </div>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                 <BsDot className="who_we_are_icon" />
                 Teachers, Tutors, and students alike con join into the game play and contribute creating memorable learning experiences through our VR/AR/MR X verse technology.</p>
              </div>
            </div>

            {/* box two */}
            <div className="who_we_are_item">
              <div className="who_we_are_item_image_box_2"></div>
              <div className="who_we_are_item_info_box">
                <h4>Who is Alter Learning for?</h4>
                <h5>Students and Families</h5>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                    <BsDot className="who_we_are_icon" />
                    Built for K-12 students in mind. Our games are designed to be fun, and educational.
                  </p>
                </div>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Families can create joint accounts (up to 5 users).
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Parents can join in to play! Put on your VR headset, and enjoy memorable learning experiences with your loved ones!
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Supports remote learning for students and families.
                </p>
              </div>
            </div>

            {/* box three */}
            <div className="who_we_are_item">
              <div className="who_we_are_item_image_box_3"></div>
              <div className="who_we_are_item_info_box">
                <h4>Who is Alter Learning for?</h4>
                <h5>Developers and Partners</h5>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                    <BsDot className="who_we_are_icon" />
                    We partner with Scientists and specialized educators to create tailored content for game developers.
                  </p>
                </div>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                    <BsDot className="who_we_are_icon" />
                    We create XR laboratories and VR/AR games for K-12 students.
                  </p>
                </div>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Are you a game developer or studio interested in creating educational games, and need a platform to reach your audience?
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                    We would love to hear from you!<br />
                  <Link to="/contact-us" className="custom_who_we_are_link">contact us at:</Link>
                  <br /><span>developers@alterlearning.com</span>
                </p>
              </div>
            </div>

            {/* box four */}
            <div className="who_we_are_item">
              <div className="who_we_are_item_image_box_4"></div>
              <div className="who_we_are_item_info_box">
                <h4>Who is Alter Learning for?</h4>
                <h5>School Districts and Institutions</h5>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                    <BsDot className="who_we_are_icon" />
                    School Districts and institutions can enhance the learning experiences for their K-12 students by having access to our content, game libraries and laboratories.
                  </p>
                </div>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Our platform provides access to global teaching methodologies.
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Supports remote learning for K-12 students and their families
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
}


export default WhoIsAlter;

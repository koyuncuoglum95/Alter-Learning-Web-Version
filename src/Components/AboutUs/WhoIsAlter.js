import React from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import "./who_Is_alter.css";

const WhoIsAlter = () => {
  return (
    <div className="main_who_we_are_container">
      <div className="inner_who_we_are_container">
        <div className="who_we_are_container_title_box">
          <h3>Who is Alter Learning for?</h3>
        </div>
        <div className="who_we_are_items_container">
          {/* box one */}
          <div className="who_we_are_item">
            <div className="who_we_are_item_image_box_1"></div>
            <div className="who_we_are_item_info">
              <div className="who_we_are_item_info_box">
                {/* <h4>Who is Alter Learning for?</h4> */}
                <h5>Teachers and Tutors</h5>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                    <BsDot className="who_we_are_icon" />
                    We help educators by providing educational games tailored to
                    enhance curriculum in Science, Technology, Engineering, the
                    Arts, and Mathematics.
                  </p>
                </div>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Teacher and tutors have full access to our Learning Management
                  Tools (LMS) for scheduling students’ classes and activities
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Supports remote learning for educators.
                </p>
              </div>
            </div>
          </div>

          {/* box two */}
          <div className="who_we_are_item">
            <div className="who_we_are_item_image_box_2"></div>
            <div className="who_we_are_item_info">
              <div className="who_we_are_item_info_box">
                {/* <h4>Who is Alter Learning for?</h4> */}
                <h5>Students and Families</h5>
              </div>
              <div className="who_we_are_item_text_content">
                <div className="inner_who_we_are_item_text_box">
                  <p>
                    <BsDot className="who_we_are_icon" />
                    Built for K-12 students in mind. Our games are designed to
                    be fun, and educational.
                  </p>
                </div>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Families can create joint accounts (up to 4 users).
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Parents can join in to play! Put on your VR headset and enjoy
                  memorable learning experiences with your loved ones!
                </p>
              </div>
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Supports remote learning for students and families.
                </p>
              </div>
            </div>
          </div>

          {/* box three */}
          <div className="who_we_are_item">
            <div className="who_we_are_item_image_box_3"></div>
            <div className="who_we_are_item_info">
            <div className="who_we_are_item_info_box">
              {/* <h4>Who is Alter Learning for?</h4> */}
              <h5>Developers and Partners</h5>
            </div>
            <div className="who_we_are_item_text_content">
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  We’ve partnered up with educational game developers that
                  specialize in VR and AR formats to create tailored content for
                  K-12 students.
                </p>
              </div>
            </div>
            <div className="who_we_are_item_text_content">
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Are you a game developer or studio interested in creating
                  educational games, and need a platform to reach your audience?
                  We would love to hear from you! Please{" "}
                  <Link to="/contact-us" className="custom_who_we_are_link">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* box four */}
          <div className="who_we_are_item">
            <div className="who_we_are_item_image_box_4"></div>
            <div className="who_we_are_item_info">
            <div className="who_we_are_item_info_box">
              {/* <h4>Who is Alter Learning for?</h4> */}
              <h5>School Districts and Institutions</h5>
            </div>
            <div className="who_we_are_item_text_content">
              <div className="inner_who_we_are_item_text_box">
                <p>
                  <BsDot className="who_we_are_icon" />
                  Institutions can add to the learning experiences for their
                  K-12 students.
                </p>
              </div>
            </div>
            <div className="inner_who_we_are_item_text_box">
              <p>
                <BsDot className="who_we_are_icon" />
                School Districts can have access to our educational content and
                our game library to diversify teaching methods, and inspire
                their students.
              </p>
            </div>
            <div className="inner_who_we_are_item_text_box">
              <p>
                <BsDot className="who_we_are_icon" />
                Supports remote learning for K-12 students and their families.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsAlter;

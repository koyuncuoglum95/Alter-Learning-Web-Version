import React from "react";
import "./footer.css";
import alterLearnImg1 from "../logo/v49_1130.webp";
import alterLearnImg2 from "../logo/v49_1328.webp";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="main_footer_container">
      <div className="main_inner_footer_container">
        <footer className="footer_content_container">

          {/* first footer section */}
          <div className="main_inner_footer_img_text_content_container">
            <div className="main_first_section_footer_container">
              <Link to="/">
                <div className="box_alter">
                  <img src={alterLearnImg1} className="footer_img_1" alt="" />
                  <img src={alterLearnImg2} className="footer_img_2" alt="" />
                </div>
              </Link>
              <div className="first_section_img_text_footer_box">
                <div className="img_icons_footer_box">
                  <Unicons.UilBuilding className="img_text_footer_icons" />
                </div>
                <div className="img_text_footer_box">
                  <h5>MAILING ADDRESS</h5>
                  <h6>2748 Ganges Place, Davis, CA 95616</h6>
                </div>
              </div>
            </div>

            {/* footer section two */}
            <div className="main_second_icons_footer_section_container">
              <div className="inner_second_footer_icon_box_container">
                <div className="second_footer_icon_box_container">
                  <div className="second_footer_icon_box second_footer_icon_box_1">
                    <a href="mailto:support@AlterLearning.com">
                      <Unicons.UilEnvelope className="footer_logo_icons" />
                    </a>
                  </div>
                  <div className="second_footer_icon_box second_footer_icon_box_2">
                    <h5>Email</h5>
                    <h6>support@AlterLearning.com</h6>
                  </div>
                </div>
                <div className="second_footer_icon_box_container">
                  <div className="second_footer_icon_box second_footer_icon_box_1">
                    <a href="https://www.facebook.com/Alter-Learning-100915929258972/" target="_blank" rel="noreferrer">
                      <Unicons.UilFacebookF className="footer_logo_icons" />
                    </a>
                  </div>
                  <div className="second_footer_icon_box second_footer_icon_box_2">
                    <h5>Facebook</h5>
                    <h6>@AlterLearning</h6>
                  </div>
                </div>
              </div>

              <div className="inner_second_footer_icon_box_container">
                <div className="second_footer_icon_box_container">
                  <div className="second_footer_icon_box second_footer_icon_box_1">
                    <a href="tel:5306018275">
                      <Unicons.UilPhone className="footer_logo_icons" />
                    </a>
                  </div>
                  <div className="second_footer_icon_box second_footer_icon_box_2">
                    <h5>Phone</h5>
                    <h6>(530)6018275</h6>
                  </div>
                </div>
                <div className="second_footer_icon_box_container">
                  <div className="second_footer_icon_box second_footer_icon_box_1">
                    <a href="https://www.linkedin.com/company/alter-learning-educational-platform-inc/" target="_blank" rel="noreferrer">
                      <Unicons.UilLinkedinAlt className="footer_logo_icons" />
                    </a>
                  </div>
                  <div className="second_footer_icon_box second_footer_icon_box_2">
                    <h5>Linkedin</h5>
                    <h6>@AlterLearning</h6>
                  </div>
                </div>
              </div>

              <div className="inner_second_footer_icon_box_container">
                <div className="second_footer_icon_box_container">
                  <div className="second_footer_icon_box second_footer_icon_box_1">
                    <a href="https://www.instagram.com/alterlearning_/" target="_blank" rel="noreferrer">
                      <Unicons.UilInstagram className="footer_logo_icons" />
                    </a>
                  </div>
                  <div className="second_footer_icon_box second_footer_icon_box_2">
                    <h5>Instagram</h5>
                    <h6>@AlterLearning</h6>
                  </div>
                </div>
                <div className="second_footer_icon_box_container">
                  <div className="second_footer_icon_box second_footer_icon_box_1">
                    <a href="https://twitter.com/alter_learning?s=20&t=xce7UZ35vuzPGOmSLhJihw" target="_blank" rel="noreferrer">
                      <Unicons.UilTwitterAlt className="footer_logo_icons" />
                    </a>
                  </div>
                  <div className="second_footer_icon_box second_footer_icon_box_2">
                    <h5>Twitter</h5>
                    <h6>@AlterLearning</h6>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* middle line between two section */}
          <div className="middle_line_between_two_sections"></div>

          {/* second footer section */}
          <div className="main_second_footer_para_and_page_link_container">
            <div className="second_footer_para_box">
              <h6>2022 Alter Learning Inc. All rights reserved. All branding and trademarks are property of Alter Learning Inc in the United States and other countries.</h6>
            </div>

            <div className="main_second_footer_links_items_box">
              <Link to="/about-us">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/legal">Legal</Link>
              <Link to="/refunds">Refunds</Link>
              <Link to="/cookies-policy">Cookies Policy</Link>
              <Link to="/faq">faq</Link>
            </div>
          </div>

        </footer>
      </div>
    </div>
  );
};


export default Footer;

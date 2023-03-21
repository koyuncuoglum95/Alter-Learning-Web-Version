/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [showMediaIcons, setShowMediaIcons] = useState(false);


  // automatically scroll page to top
  const globalRef = useRef(null)
  const globalScroll = () => globalRef.current.scrollIntoView(0)

  useEffect(() => {
    setUrl(location.pathname);

    globalScroll();

  }, [location, setUrl]);


  return (
    <>
      <nav className="main-nav" ref={globalRef}>
        {/* 1st section - The Logo  */}
        <div className="logo_container">
          <Link to="/" className="logo_icon_box">
            <div className="v49_1328 unknown_img" />
            <div className="v49_1130 unknown_img" />
          </Link>
        </div>

        {/* 2nd section - The NavLinks  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">
                <span className="linkIcons">
                  <Unicons.UilHome className="icons" />
                </span>
              </Link>
              <Link to="/" className={(url === "/" ? "active" : "")}>HOME</Link>
            </li>
            <li>
              <Link to="/messages">
                <span className="linkIcons">
                  <Unicons.UilEnvelopeExclamation className="icons" />
                </span>
              </Link>
              <Link to="/messages" className={(url === "/messages" ? "active" : "")}>MESSAGES</Link>
            </li>
            <li>
              <Link to="/about-us">
                <span className="linkIcons">
                  <Unicons.UilAward className="icons" />
                </span>
              </Link>
              <Link to="/about-us" className={(url === "/about-us" ? "active" : "")}>ABOUT</Link>
            </li>
            <li>
              <Link to="/games">
                <span className="linkIcons">
                  <Unicons.UilFire className="icons" />
                </span>
              </Link>
              <Link to="/games" className={(url === "/games" ? "active" : "")}>GAMES</Link>
            </li>
            <li>
              <Link to="/our-team">
                <span className="linkIcons">
                  <Unicons.UilUsersAlt className="icons" />
                </span>
              </Link>
              <Link to="/our-team" className={(url === "/our-team" ? "active" : "")}>OUR TEAM</Link>
            </li>
            <li>
              <Link to="/contact-us">
                <span className="linkIcons">
                  <Unicons.UilMegaphone className="icons" />
                </span>
              </Link>
              <Link to="/contact-us" className={(url === "/contact-us" ? "active" : "")}>CONTACT US</Link>
            </li>
          </ul>
        </div>

        {/* 3rd section - The Login, Logout and Dark mode */}
        <div className="social-media">
          <div className="login_section">
            <li>
              <Link to="/login" className={(url === "/login" ? "active" : "")}>Log in</Link>
            </li>
            <li>
              <Link to="/signup" className={(url === "/signup" ? "active" : "")}>Sign Up</Link>
            </li>
          </div>

          {/* 5th section - The hamburger menu on small screen  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <Unicons.UilBars id="hamburger_menu_icon" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navbar;






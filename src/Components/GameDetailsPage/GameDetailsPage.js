/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { ImAndroid } from "react-icons/im";
import { AiFillWindows } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { gameData } from "../data/game_data";
import "./game_details_page.css";
import GameNotFound from './GameNotFound';
import Helmet from 'react-helmet';
import MainShare from '../MainShare/MainShare'


const GameDetailsPage = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

   // automatically scroll page to top
   const globalRef = useRef(null)
   const globalScroll = () => globalRef.current.scrollIntoView(0);

    useEffect(() => {
      let gameDetailResults = gameData.find((game) => game.id === parseInt(id));
      if (gameDetailResults) {
        setGameDetails(gameDetailResults);
      };

      globalScroll();

    }, [id]);


  return(
    <>
      <Helmet>
        <title>Alter Learning Educational Platform - Game details</title>
        <meta name="description" content="Alter Learning Educational Platform - Game details" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

    <div className="main_game_details_page_container" ref={globalRef}>
        <div className="inner_game_details_page_container">

        <div className="game_details_back_link_box">
          <div className="inner_game_details_back_link_box">
              <RouterLink to="/games">
                Game Lists
                <FaGreaterThan className="back_link_icons" />
              </RouterLink>
              <span>Game Details</span>
          </div>
        </div>

        { gameDetails ? (
          <div className="game_details_contents_box">
            <div className="game_details_title_box">
              <h1>{gameDetails.title}</h1>
            </div>

            {/* game youtube iframe */}
            <div className="asidebar_iframe_box">
              <iframe src={gameDetails.youtube_iframe_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
            </div>

            {/* game video text */}
            <div className="game_detail_para_text_box">
              <h4>
                {gameDetails.description}
              </h4>
            </div>

            <div>
              <MainShare />
            </div>

            {/* take me to Itch game demo */}
            <div className="take_me_to_itch_game_box">
              <Link to="game_iframe_section">Play Game Demo in WebGL</Link>
            </div>

            {/* game Iframe */}
            <div className="itch_iframe_game_box" id="game_iframe_section">
              <h5>Game Demo</h5>
            </div>

            {/* itch iframe container */}
            <div className="iframe_container">
              <iframe frameBorder="0" src={gameDetails.iframe_model_link} allowFullScreen className="custom_itch_inframe_style">
                <a href={gameDetails.iframe_angle_link}>
                  <h6>{gameDetails.iframe_angle_text}</h6>
                </a>
              </iframe>
            </div>

            {/* game installation section */}
            <div className="main_game_detail_install_box">
              <div className="inner_game_detail_contents_install_box">
                <div className="game_detail_install_title_box">
                  <h3>Install instructions</h3>
                </div>
                <div className="game_detail_install_text_box">
                  <h5><span>Windows:</span> download the executable to your device running windows and enjoy!</h5>
                  <h5><span>Android:</span> download the apk file to your android device and enjoy!</h5>
                </div>
                <div className="download_title_box">
                  <h3>Download</h3>
                </div>
                <div className="game_detail_download_game_box">
                  <div className="download_btn_box custom_style_box">
                    <button type="button">
                      <ImAndroid className="game_detail_icons" />
                      for windows
                    </button>
                    <div className="download_container">
                      <span>
                        {gameDetails.android_mb}
                      </span>
                    </div>
                  </div>
                  <div className="download_btn_box">
                    <button type="button">
                      <AiFillWindows className="game_detail_icons" />
                      for Android
                    </button>
                    <div className="download_container">
                      <span>
                        {gameDetails.windows_mb}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : (
            <GameNotFound />
          )}
        </div>
      </div>
    </>
  )
}


export default GameDetailsPage;

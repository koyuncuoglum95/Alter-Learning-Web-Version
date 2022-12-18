import React from "react";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faVrCardboard, faMobile, faCalendar, faShip, faPuzzlePiece, faBrain, faBaseball, faDiceSix } from "@fortawesome/free-solid-svg-icons";
import "./game_browse_genres.css";


const GameBrowseGenres = () => {
  return(
    <div className="main_browser_game_section">
      <div className="main_inner_browser_game_section">

        <div className="main_browser_game_white_outer_bg">
          <h5>BROWSE GENRES</h5>
        </div>

        <div className="main_browser_game_content_box">

            <div className="main_browse_top_line"></div>

            <div className="main_browse_genres_games_container">

              <div className="main_browse_genres_game_box_1">
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faVrCardboard} />
                  VIRTUAL REALITY
                </span>
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faMobile} />
                  AUGMENTED REALITY
                </span>
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faCalendar} />
                  ACTION
                </span>
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faShip} />
                  ADVENTURE
                </span>
              </div>

              <div className="main_browse_middle_line"></div>

              <div className="main_browse_genres_game_box_2">
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faPuzzlePiece} />
                  PUZZLE
                </span>
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faBrain} />
                  STRATEGY
                </span>
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faBaseball} />
                  SPORTS
                </span>
                <span>
                  <FontAwesomeIcon className="browse_genres_icon" icon={faDiceSix} />
                  ROLE PLAYING
                </span>
              </div>

            </div>

            <div className="main_browse_bottom_line"></div>

        </div>

      </div>
   </div>
  )
}


export default GameBrowseGenres;

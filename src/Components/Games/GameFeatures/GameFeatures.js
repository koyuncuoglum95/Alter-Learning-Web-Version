import React from 'react';
import "./game_features.css";


const GameFeatures = () => {

  return (
    <>
      <div className="main_game_page_container">
        {/* Section One */}
       <div className="inner_game_page_container">
        {/* first box section */}
        <div className="main_first_page_game_content_box">
          {/* box one */}
          <div className="main_horizontal_single_game_page_content">
            <div className="game_page_white_outer_bg"></div>
            <div className="main_game_page_image_box_1">
              <div className="main_game_page_text_box">
                <h1>GAMES BUILT FOR EDUCATION</h1>
                <h1>GAMES BUILT FOR FUN</h1>
              </div>
            </div>
          </div>
        </div>

        {/* second box section */}
        <div className="main_second_page_game_content_box">
          {/* box one */}
          <div className="main_single_game_page_content custom_margin_bottom_box">
            <div className="main_game_page_white_outer_bg">
              <h5>FEATURED GAME</h5>
            </div>

            <div className="main_game_page_image_box_2">
              <iframe className="main_game_page_video_box" src="https://www.youtube.com/embed/ilOCjy_JFoQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
            </div>

            <div className="main_game_page_white_bottom_bg">
              <div className="main_game_page_white_bottom_links_box">
                <span>VR STEAM</span>
                <span>VR</span>
                <span>Action</span>
                <span>Puzzle</span>
              </div>
            </div>
          </div>

          {/* box two */}
          <div className="main_single_game_page_content">
            <div className="main_game_page_white_outer_bg">
              <h5>FEATURED GAME</h5>
            </div>

            <div className="main_game_page_image_box_3">
            <iframe className="main_game_page_video_box" src="https://www.youtube.com/embed/meXffg1IQbc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            </div>

            <div className="main_game_page_white_bottom_bg">
              <div className="main_game_page_white_bottom_links_box">
                <span>Gene-X Evolutions</span>
                <span>VR</span>
                <span>Action</span>
                <span>Puzzle</span>
              </div>
            </div>
          </div>

        </div>
       </div>
      </div>
    </>
  )
}


export default GameFeatures;

import React, { useState } from "react";
import {
  AiOutlineCheckSquare,
  AiOutlineApple,
  AiOutlineAndroid,
  AiOutlineWindows,
} from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Web_kids from "../Home/home_images/web_kids.png";
import Vr_kid from "../Home/home_images/vr_kid.png";
import Mobile_kids from "../Home/home_images/mobile_kids.png";
import GreenScience from "../Home/home_images/green_science_games.png";
import Technology from "../Home/home_images/technology.png";
import Engineering from "../Home/home_images/engineering.png";
import Mathematics from "../Home/home_images/mathematics.png";
import Science from "../Home/home_images/science.png";
import Arts from "../Home/home_images/arts.png";
import GENE from "../Home/home_images/gene_x_evolution.png";
import VR_STEAM from "../Home/home_images/vr_steam.png";
import VR_MARINE from "../Home/home_images/vr_marine_bio.png";
import VR_MUSIC from "../Home/home_images/vr_music_hall.png";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import HeroScreen from "../HeroBanner/HeroScreen";
import Helmet from "react-helmet";


const Home = () => {
  const [displayGame, setDisplay] = useState(GENE);
  const [displayHeader, setHeader] = useState(
    "Gene-X Evolution | VR | Action | Puzzle"
  );
  const setGene = () => {
    setDisplay(GENE);
    setHeader("Gene-X Evolution | VR | Action | Puzzle");
  };
  const setVRSTEAM = () => {
    setDisplay(VR_STEAM);
    setHeader("VR STEAM: A Celestial Journey | VR | Adventure");
  };
  const setVRMARINE = () => {
    setDisplay(VR_MARINE);
    setHeader("VR Marine Biology | VR | Adventure | Strategy");
  };
  const setVRMUSIC = () => {
    setDisplay(VR_MUSIC);
    setHeader("VR Music Hall | VR | Adventure");
  };
  const setGREENS = () => {
    setDisplay(GreenScience);
    setHeader("Green Science Games Series | VR | AR | Puzzle | Strategy");
  };


  return (
    <>
      <Helmet>
        <title>Alter Learning Educational Platform - Home</title>
        <meta name="description" content="Alter Learning Educational Platform - Home" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

      <HeroScreen />

    <div className="main_home_page_container">
      <div className="inner_main_home_page_container">
        <div className="home_page_content_box">

        {/* box one */}
        <div className="first_home_text_container">
          <div className="home_text_box custom_text_1">
            <h1>XR GAMING</h1>
            <h1>SOCIAL MEDIA</h1>
            <h1>X-VERSE TECHNOLOGY</h1>
          </div>
          <div className="home_text_box custom_text_2">
            <h1>Approved By:</h1>
          </div>
          <div className="home_text_box custom_text_3">
            <h1>SCIENTISTS </h1>
            <h1>EDUCATORS </h1>
            <h1>PARENTS </h1>
            <h1>STUDENTS </h1>
          </div>
          <div className="home_text_box custom_text_4">
            <AiOutlineCheckSquare className="checkIcon" />
            <AiOutlineCheckSquare className="checkIcon" />
            <AiOutlineCheckSquare className="checkIcon" />
            <AiOutlineCheckSquare className="checkIcon" />
          </div>
        </div>

       {/* Show only on Mobile screen */}
       <div className="home_page_display_mobile_slide_item_box show_on_mobile">
          <Carousel controls={false} className="play_on_display_mobile_carousel" variant="dark">
            <Carousel.Item className="carousel_items_display_mobile">
              <button>AR/VR/MR/XR</button>
              <img src={Vr_kid} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item className="carousel_items_display_mobile">
              <button>Mobile Games</button>
              <img src={Mobile_kids} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item className="carousel_items_display_mobile">
              <button>WebGL / XR</button>
              <img src={Web_kids} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Show only on desktop screen */}
        <div className="home_page_play_container show_on_desktop">
          <div className="horizontal_line_1"></div>
          <div className="horizontal_line_2"></div>
          <div className="inner_home_page_play_container">
            <div className="game_img_box">
              <button>Mobile Games</button>
              <div className="home_game_img_box">
                <img id="mobileImg" src={Mobile_kids} alt=""></img>
              </div>
            </div>
            <div className="game_img_box">
              <button>AR/VR/MR/XR Laboratories</button>
              <div className="home_game_img_box">
                <img src={Vr_kid} alt=""></img>
              </div>
            </div>
            <div className="game_img_box">
              <button>WebGL/XR Experiences</button>
              <div className="home_game_img_box">
                <img src={Web_kids} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        {/* STEAM Boxes - show only on mobile screen */}
        <div className="home_page_steam_boxes_display_mobile_box show_on_mobile">
          <Carousel controls={false} variant="dark" className="carousel_steam_boxes_display_mobile_box" >
            <Carousel.Item className="global_steam_items_display_mobile">
              <div className="single_steam_boxes_display_mobile_box">
                <div className="single_steam_boxes_top_line_display_mobile_box"></div>
                <div className="single_steam_img_and_text_box_display_mobile_box">
                  <img src={Science} alt="" />
                  <h2>SCIENCE</h2>
                </div>
                <div className="single_steam_boxes_bottom_line_display_mobile_box"></div>
                <p>
                We create games for scientists of the future. Learn how DNA is
                made, discover the wonders of the universe and our planet. Explore
                your own human anatomy, examine the many organisms on our
                planet, and so much more.
              </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="global_steam_items_display_mobile">
              <div className="single_steam_boxes_display_mobile_box">
               <div className="single_steam_boxes_top_line_display_mobile_box"></div>
               <div className="single_steam_img_and_text_box_display_mobile_box">
                <img src={Technology} alt="" />
                 <h2>TECHNOLOGY</h2>
                </div>
                <div className="single_steam_boxes_bottom_line_display_mobile_box"></div>
                <p>
                Are you fascinated by the ever evolving world of technology?
                Innovate technical solutions for today and tomorrow by enhancing
                your knowledge with cutting edge tools.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="global_steam_items_display_mobile">
              <div className="single_steam_boxes_display_mobile_box">
               <div className="single_steam_boxes_top_line_display_mobile_box"></div>
               <div className="single_steam_img_and_text_box_display_mobile_box">
                <img src={Engineering} alt="" />
                 <h2>ENGINEERING</h2>
                </div>
                <div className="single_steam_boxes_bottom_line_display_mobile_box"></div>
                <p>
                  Do you ever find yourself wondering how gadgets work? Do you enjoy solving problems and puzzles? We need you to buildup your mind and shape the world's infrastructure to lead us into tomorrow.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="global_steam_items_display_mobile">
              <div className="single_steam_boxes_display_mobile_box">
               <div className="single_steam_boxes_top_line_display_mobile_box"></div>
                <div className="single_steam_img_and_text_box_display_mobile_box">
                  <img src={Arts} alt="" />
                  <h2>ARTS</h2>
                </div>
                <div className="single_steam_boxes_bottom_line_display_mobile_box"></div>
                <p>
                Unleash your inner artist and share who you are with the rest of
                the world! Express your creative side through singing, musical
                instruments, dancing, and much more! Be yourself, we encourage it!
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="global_steam_items_display_mobile">
              <div className="single_steam_boxes_display_mobile_box">
              <div className="single_steam_boxes_top_line_display_mobile_box"></div>
               <div className="single_steam_img_and_text_box_display_mobile_box">
                  <img src={Mathematics} alt="" />
                  <h2>MATHEMATICS</h2>
                </div>
                <div className="single_steam_boxes_bottom_line_display_mobile_box"></div>
                <p>
                Learn how math is used in every day life. Calculate the inner
                workings of the macro and micro universe, and how we move through
                it.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* STEAM Boxes - show only on desktop screen */}
        <div className="home_page_long_steam_boxes_on_desktop_screen show_on_desktop">
          <div className="inner_home_page_long_steam_boxes_on_desktop_screen">
            <div className="single_steam_boxes_on_desktop_screen">
              <div className="img_top_line"></div>
              <img src={Science} alt="" />
              <div className="img_bottom_line"></div>
              <h6>SCIENCE</h6>
              <p>
                We create games for scientists of the future. Learn how DNA is
                made, discover the wonders of the universe and our planet. Explore
                your own human anatomy, examine the many organisms on our
                planet, and so much more.
              </p>
            </div>
            <div className="single_steam_boxes_on_desktop_screen">
              <div className="img_top_line"></div>
              <img src={Technology} alt="" />
              <div className="img_bottom_line"></div>
              <h6>TECHNOLOGY</h6>
              <p>
                Are you facinated by the ever evolving world of technology?
                Innovate technical solutions for today and tomorrow by enhancing
                your knowledge with cutting edge tools.
              </p>
            </div>
            <div className="single_steam_boxes_on_desktop_screen">
              <div className="img_top_line"></div>
              <img src={Engineering} alt="" />
              <div className="img_bottom_line"></div>
              <h6>ENGINEERING</h6>
              <p>
                Do you ever find yourself wondering how gadgets work? Do you enjoy solving problems and puzzles? We need you to buildup your mind and shape the world's infrastructure to lead us into tomorrow.
              </p>
            </div>
            <div className="single_steam_boxes_on_desktop_screen">
              <div className="img_top_line"></div>
              <img src={Arts} alt="" />
              <div className="img_bottom_line"></div>
              <h6>ARTS</h6>
              <p>
                Unleash your inner artist and share who you are with the rest of
                the world! Express your creative side through singing, musical
                instruments, dancing, and much more! Be yourself, we encourage it!
              </p>
            </div>
            <div className="single_steam_boxes_on_desktop_screen">
              <div className="img_top_line"></div>
              <img src={Mathematics} alt="" />
              <div className="img_bottom_line"></div>
              <h6> MATHEMATICS</h6>
              <p>
                Learn how math is used in every day life. Calculate the inner
                workings of the macro and micro universe, and how we move through
                it.
              </p>
            </div>
          </div>
        </div>

        {/* GAMES Boxes - show only on Mobile screen */}
        <div className="home_page_games_boxes_display_mobile_container show_on_mobile">
          <Carousel controls={false} className="carousel_games_display_mobile_box" variant="dark">
            <Carousel.Item className="carousel_game_items_display_mobile">
              <div className="single_carousel_game_item_display_mobile">
                <img src={GENE} alt="" />
                <span>Gene-X Evolution | VR | ADVENTURE | PUZZLE</span>
                <div className="carousel_game_top_line_display_mobile"></div>
                <h1>PLAY OUR GAMES ON:</h1>
                <div className="single_carousel_game_button_display_mobile">
                  <button>
                    <AiOutlineApple className="play_icon" />
                    iOS
                  </button>
                  <button>
                    <AiOutlineAndroid className="play_icon" />
                    ANDROID
                  </button>
                  <button>
                    <AiOutlineWindows className="play_icon" />
                    WINDOWS 10
                  </button>
                  <button>
                    <HiOutlineDesktopComputer className="play_icon" />
                    WebGL
                  </button>
                </div>
                <div className="carousel_game_bottom_line_display_mobile"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="carousel_game_items_display_mobile">
              <div className="single_carousel_game_item_display_mobile">
                <img src={VR_STEAM} alt="" />
                <span>VR STEAM: A Celestial Journey | VR | ADVENTURE</span>
                <div className="carousel_game_top_line_display_mobile"></div>
                <h1>PLAY OUR GAMES ON:</h1>
                <div className="single_carousel_game_button_display_mobile">
                  <button>
                    <AiOutlineApple className="play_icon" />
                    iOS
                  </button>
                  <button>
                    <AiOutlineAndroid className="play_icon" />
                    ANDROID
                  </button>
                  <button>
                    <AiOutlineWindows className="play_icon" />
                    WINDOWS 10
                  </button>
                  <button>
                    <HiOutlineDesktopComputer className="play_icon" />
                    WebGL
                  </button>
                </div>
                <div className="carousel_game_bottom_line_display_mobile"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="carousel_game_items_display_mobile">
              <div className="single_carousel_game_item_display_mobile">
                <img src={VR_MARINE} alt="" />
                <span>VR Marine Biology | VR | ADVENTURE | STRATEGY</span>
                <div className="carousel_game_top_line_display_mobile"></div>
                <h1>PLAY OUR GAMES ON:</h1>
                <div className="single_carousel_game_button_display_mobile">
                  <button>
                    <AiOutlineApple className="play_icon" />
                    iOS
                  </button>
                  <button>
                    <AiOutlineAndroid className="play_icon" />
                    ANDROID
                  </button>
                  <button>
                    <AiOutlineWindows className="play_icon" />
                    WINDOWS 10
                  </button>
                  <button>
                    <HiOutlineDesktopComputer className="play_icon" />
                    WebGL
                  </button>
                </div>
                <div className="carousel_game_bottom_line_display_mobile"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="carousel_game_items_display_mobile">
              <div className="single_carousel_game_item_display_mobile">
                <img src={VR_MUSIC} alt="" />
                <span>VR Music Hall | VR | ART</span>
                <div className="carousel_game_top_line_display_mobile"></div>
                <h1>PLAY OUR GAMES ON:</h1>
                  <div className="single_carousel_game_button_display_mobile">
                    <button>
                      <AiOutlineApple className="play_icon" />
                      iOS
                    </button>
                    <button>
                      <AiOutlineAndroid className="play_icon" />
                      ANDROID
                    </button>
                    <button>
                      <AiOutlineWindows className="play_icon" />
                      WINDOWS 10
                    </button>
                    <button>
                      <HiOutlineDesktopComputer className="play_icon" />
                      WebGL
                    </button>
                  </div>
                <div className="carousel_game_bottom_line_display_mobile"></div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="carousel_game_items_display_mobile">
              <div className="single_carousel_game_item_display_mobile">
                <img src={GreenScience} alt="" />
                <span>
                  Green Science Games Series | VR | AR | PUZZLE | STRATEGY
                </span>
                <div className="carousel_game_top_line_display_mobile"></div>
                <h1>PLAY OUR GAMES ON:</h1>
                <div className="single_carousel_game_button_display_mobile">
                  <button>
                    <AiOutlineApple className="play_icon" />
                    iOS
                  </button>
                  <button>
                    <AiOutlineAndroid className="play_icon" />
                    ANDROID
                  </button>
                  <button>
                    <AiOutlineWindows className="play_icon" />
                    WINDOWS 10
                  </button>
                  <button>
                    <HiOutlineDesktopComputer className="play_icon" />
                    WebGL
                  </button>
                 </div>
                <div className="carousel_game_bottom_line_display_mobile"></div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* GAMES Boxes - show only on desktop screen */}
        <div className="home_page_main_container show_on_desktop">
          <div className="home_page_side_box_1 custom_side_box_1">
            <h1>GAMES</h1>
            <span>
              <h6>
                <span>Educational</span>games built to enhance students’ learning experiences!
              </h6>
            </span>
            <div className="game_horizontal_line_1"></div>
            <div className="toggle_handle_img_box" onClick={() => setGene()}>
              <img src={GENE} alt="" />
              <div className="toggle_handle_text_box">
                <h5>Gene-X Evolution</h5>
                <h6>GENRE: VR | ADVENTURE | PUZZLE</h6>
              </div>
            </div>
            <div className="game_horizontal_line_1"></div>
            <div className="toggle_handle_img_box" onClick={() => setVRSTEAM()}>
              <img src={VR_STEAM} alt="" />
              <div className="toggle_handle_text_box">
                <h5>VR STEAM: A Celestial Journey</h5>
                <h6>GENRE: VR | ADVENTURE</h6>
              </div>
            </div>
            <div className="game_horizontal_line_1"></div>
            <div className="toggle_handle_img_box" onClick={() => setVRMARINE()}>
              <img src={VR_MARINE} alt="" />
              <div className="toggle_handle_text_box">
                <h5>VR Marine Biology</h5>
                <h6>GENRE: VR | ADVENTURE | STRATEGY</h6>
              </div>
            </div>
            <div className="game_horizontal_line_1"></div>
            <div className="toggle_handle_img_box" onClick={() => setVRMUSIC()}>
              <img src={VR_MUSIC} alt="" />
              <div className="toggle_handle_text_box">
                <h5>VR Music Hall</h5>
                <h6>GENRE: VR | ART</h6>
              </div>
            </div>
            <div className="game_horizontal_line_1"></div>
            <div className="toggle_handle_img_box" onClick={() => setGREENS()}>
              <img src={GreenScience} alt="" />
              <div className="toggle_handle_text_box">
                <h5>Green Science Games Series</h5>
                <h6>GENRE: VR | AR | PUZZLE | STRATEGY</h6>
              </div>
            </div>
            <div className="game_horizontal_line_1"></div>
          </div>

          <div className="home_page_side_box_2 custom_side_box_2">
            <img src={displayGame} alt="" />
            <p>{displayHeader}</p>
            <div className="game_horizontal_line_2"></div>
            <div className="home_page_game_desktop_button_box">
              <div className="global_home_button_box home_game_button_box_1">
                <button>
                  <AiOutlineApple className="play_icon" />
                  PLAY ON iOS
                </button>
                <button>
                  <AiOutlineAndroid className="play_icon" />
                  PLAY ON ANDROID
                </button>
              </div>
              <div className="global_home_button_box home_game_button_box_2">
                <button>
                  <AiOutlineWindows className="play_icon" />
                  PLAY ON PC
                </button>
                <button>
                  <HiOutlineDesktopComputer className="play_icon" />
                  PLAY ON WebGL
                </button>
              </div>
            </div>
            <div className="game_horizontal_line_2"></div>
          </div>
         </div>

        </div>
      </div>
    </div>
    </>
  );
};


export default Home;

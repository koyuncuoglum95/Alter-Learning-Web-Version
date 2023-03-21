import React from 'react'
import { AiOutlineShareAlt, AiOutlineAndroid, AiOutlineApple, AiOutlineFire, AiOutlineHome } from 'react-icons/ai'
import { BsHeartFill, BsPhone, BsDice6 } from 'react-icons/bs'
import { RxGrid } from 'react-icons/rx'
import { HiOutlineDesktopComputer, HiOutlinePuzzle } from 'react-icons/hi'
import { GiProtectionGlasses } from 'react-icons/gi'
import { TbRobot } from 'react-icons/tb'
import { BiBrain, BiBall } from 'react-icons/bi'
import { MdOutlineDirectionsBoatFilled } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import './GamesDemo.css';
export default function GamesDemo() {
  const navigate = useNavigate()

  function handleNavigateHome() {
    return navigate('/')
  }

  function handleNavigateGames() {
    return navigate('/games')
  }

  return (
    <div className="main_container_game_demo">
      <div className="header_container_game_demo"></div>
      <div className="inner_container_game_demo">
        <div className="inner_container_header">.</div>
        <div className="inner_container_main_image"></div>

        <div className="inner_container_demos_list">
          <div className="first_demo_image"></div>
          <div className="second_demo_image"></div>
          <div className="third_demo_image"></div>
          <div className="fourth_demo_image"></div>
          <div className="fifty_demo_image"></div>
        </div>

        <div className="game_demo_content">
          <div className="game_demo_info_text">
            <h6 className="game_title">VR STEAM : A Celestial Journey</h6>
            <div>The STEAM Lab is a world-spanning environment that allows students to travel among several planetary and lunar surfaces including Earth, the Moon, Europa, Titan, Venus, Mercury, and Mars.<br></br><br></br> Users engage instructive laboratory lessons on diverse subject matters across STEM fields and supplement their immersive educational experiences with exploration and scientific experimentation across terrestrial, lunar, and Martian surfaces.<br></br><br></br> <strong>HARDWARE NEEDED</strong> (Minimum 2 GB system memory and video graphics card that supports WebGL or Windows 10 on your computer is recommended. 4 GB of system memory prefered. Hardware should have non mobile graphics card with minimum 512 MB of video memory.<br></br><br></br> For mobile devices, this game runs using the latest versions of Android 12.0 or Apple iOS 15.2)</div>
          </div>

          <div className="game_demo_link_box">
            <div className="game_demo_link_buttons">
              <div className='srcButtons'>
                <button> <AiOutlineShareAlt size={25} /> SHARE</button>
                <button> <BsHeartFill size={25} color="#FF0F00" /> 994</button>
              </div>
              <div className='gamesButtonsSection'>
                <button><AiOutlineApple size={30} /> PLAY ON IOS</button>
                <button> <AiOutlineAndroid size={30} />PLAY ON ANDROID</button>
                <button><RxGrid size={30} />PLAY ON WINDOWS 10</button>
                <button><HiOutlineDesktopComputer size={30} />PLAY ON WEB GL</button>
              </div>
            </div>
            <img className="esrb_info" alt='' />
          </div>

        </div>

        <div className="dev_info">
          <div>DEVELOPER : <a href="www.google.com">Alter Learning</a></div>
          <div>GENRE : <a href="www.google.com">VR〡ADVENTURE</a></div>
        </div>

        <div className="dev_info">
          <div>PUBLISHER : <a href="www.google.com">Alter Learning</a></div>
          <div>RELEASED 06.22.21</div>
        </div>

        <div className="invite_content">
          Our complete game library and social media network can be enjoyed at :
          <a href="www.google.com">www.connect.alter-learning.com</a>Join today!
        </div>

        <div className="invite_links">
          <button onClick={handleNavigateHome}>
            <AiOutlineHome size={30} /> BACK HOME
          </button>
          <button onClick={handleNavigateGames}>
            <AiOutlineFire size={30} />BACK TO GAMES
          </button>
        </div>
      </div>

      <div className="game_genres_box">
        <div className='gameGenresTitle'>
          <h8>BROWSE GENRES</h8>
        </div>

        <div className="list_of_game_genres">
          <div className='left'>
            <div className='item'>
              <h6><a href="www.google.com"> <GiProtectionGlasses size={25} color="#454545" /> VIRTUAL REALITY</a></h6>
            </div>
            <div className='item'>
              <h6><a href="www.google.com"><BsPhone size={25} color="#454545" /> AUGMENTED REALITY</a></h6>

            </div>
            <div className='item'>
              <h6><a href="www.google.com"><TbRobot size={25} color="#454545" /> ACTION</a></h6>

            </div>

            <div>
              <h6><a href="www.google.com"><MdOutlineDirectionsBoatFilled size={25} color="#454545" /> ADVENTURE</a></h6>

            </div>
          </div>

          <div className='middleBar'></div>

          <div className='right'>
            <div className='item'>

              <h6><a href="www.google.com"><HiOutlinePuzzle size={25} color="#454545" />PUZZLE</a></h6>
            </div>

            <div className='item'>
              <h6><a href="www.google.com"><BiBrain size={25} color="#454545" />STRATEGY</a></h6>
            </div>

            <div className='item'>
              <h6><a href="www.google.com"><BiBall size={25} color="#454545" /> SPORTS</a></h6>
            </div>

            <div>
              <h6><a href="www.google.com"><BsDice6 size={20} color="#454545" /> ROLE PLAYING</a></h6>

            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

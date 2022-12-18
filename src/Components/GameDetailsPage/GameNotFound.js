import React from 'react';
import './game_not_found.css';
import gameNotFoundImg from "../logo/game_not_found.gif";


const GameNotFound = () => (
  <div className='game_not_found_box'>
     <h3>We are sorry. No game is return!</h3>
    <img src={gameNotFoundImg} alt='empty' />
  </div>
);

export default GameNotFound;

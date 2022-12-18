import React from 'react';
import Helmet from 'react-helmet';
import GameBrowseGenres from '../GameBrowseGenres/GameBrowseGenres';
import GameFeatures from "../GameFeatures/GameFeatures";
import GameList from "../GameLists/GameLists";
import "./main_games_screen.css";



const MainGamesScreen = () => {
  return (
    <>
      <Helmet>
        <title>Alter Learning Educational Platform - Game Lists</title>
        <meta name="description" content="Alter Learning Educational Platform - Game Lists" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

      <div className="main_games_screen">
        <div className="main_inner_games_screen">
          <GameFeatures />
          <GameList />
          <GameBrowseGenres />
        </div>
      </div>
    </>
  )
}


export default MainGamesScreen;

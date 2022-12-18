/* eslint-disable array-callback-return */
import React, { Fragment, useState } from "react";
import { gameData } from "../../data/game_data";
import SingleGame from "../GameLists/SingleGame";
import GamesListHero from "../GameListHeroScreen/GamesListHeroScreen";
import GameNotFound from "../../GameDetailsPage/GameNotFound";


const GameLists = () => {
  const [searchedArray, setSearchedArray] = useState(gameData);
  const [searchString, setSearchString] = useState("");
  const [numberOfGames, setNumberOfGames] = useState(5);

  // fetch single game
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchString(searchWord)
    const newFilter = gameData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === ""){
      setSearchedArray(gameData);
    } else {
      setSearchedArray(newFilter);
    }
  };


  // Load more games
  const loadMoreGames = () => {
    setNumberOfGames(numberOfGames + 2)
  }

  const sliceNumberGames = searchedArray.slice(0, numberOfGames);


  return (
    <>
      <div className="main_games_listing_container">
        <div className="games_listing_screen_container">
          <div className="inner_games_listing_screen_container">

            <div className="games_listing_search_and_topic_section">
              <div className="games_list_text_box">
                <h5>GAME LIBRARY</h5>
              </div>
              <div className="search_box_container">
                <div className="search_games_container">
                  <div className="inner_search_games_container">
                    <input
                      type="text"
                      autoComplete="off"
                      value={searchString}
                      onChange={handleFilter}
                      placeholder="Search for games"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="games_listing_outer_line"></div>

            <GamesListHero />

            <div className="game_list_container">
              <div className="inner_game_list_container">

                { sliceNumberGames.map((game, index) => {
                  return (
                    <Fragment key={index}>
                      { !sliceNumberGames.length ? <GameNotFound />
                        :
                        <SingleGame game={game} index={index} />
                      }
                    </Fragment>
                  )
                })}
              </div>
            </div>
            <div className="games_listing_bottom_line"></div>
          </div>

          {numberOfGames < searchedArray.length &&
            <button className="load_more_game_btn" onClick={() => loadMoreGames()}>
             More Games...
            </button>
          }

          {numberOfGames < searchedArray.length &&
            <div className="games_listing_custom_bottom_line"></div>
          }
        </div>
      </div>
    </>
  )
}


export default GameLists;

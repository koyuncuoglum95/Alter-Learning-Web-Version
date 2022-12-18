import React, { useState } from 'react';
import{ AiOutlineHeart, AiFillHeart }from'react-icons/ai';


const SingleGame = ({game, index}) => {
  const [liked, setLiked] = useState(false);

  console.log(game)

  const likedButton = () => {
    setLiked(current => !current);
  }


  return (
    <div className="game_list_contents_container" key={index}>
     <div className="game_list_outer_line"></div>
      <div className="game_list_item_box">
        <a href={game.link}>
          <img src={`${game.img_url}`} alt="" />
        </a>
        <div className="game_list_text_content_box">
          <div className="game_list_title_and_link_box">
            <div className="game_list_title_box">
            <a href={game.link}>
              <h4>{game.title}</h4>
            </a>
            </div>
            <div className="game_list_share_link_box">
              <div className="game_list_love_heart_btn_box global_social_btn_box">
                {
                  liked ? <AiFillHeart className="game_list_icons_2 global_game_list_icon" onClick={likedButton}/>
                        : <AiOutlineHeart className="game_list_icons_2 global_game_list_icon" onClick={likedButton}/>
                }
                <span>{game.fake_number}</span>
              </div>
            </div>
          </div>
          <p>{game.description.slice(0, 300)}...</p>
          <div className="game_list_genre_box">
            <p>GENRE: </p>
            { game.genreLists.map((gen, i) => (
              <span key={i}>
                <span key={i}>{gen}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="game_list_bottom_line"></div>
    </div>
  )
}


export default SingleGame;

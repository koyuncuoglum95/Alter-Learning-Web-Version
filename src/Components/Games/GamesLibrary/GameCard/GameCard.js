import './GameCard.css'

import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function GameCard({ isLiked, title, categories, version, likes, oldPrice, newPrice, imagePath }) {
  return (
    <div className='gameCardWrapper'>
      <div className='gameCardContent'>
        <img src={imagePath} alt='' />
        <div>
          <h1 className='gameTitle'>
            {title}
          </h1>
          <div className='categoriesWrapper'>
            {categories.map((category) => (
              <p>{category} <span>〡</span></p>
            ))}
            <span>Released {version}</span>
          </div>
        </div>
      </div>


      <div className='srcWrapper'>
        <div className='prices'>
          <span className='oldPrice'><s>${oldPrice}</s></span>
          <span className='newPrice'>${newPrice}</span>
        </div>

        <div className='srcButtons'>
          <div className='likesButton'>
            <button>
              {isLiked ? (
                <BsHeartFill size={30} color="red" />
              ) : (
                <BsHeart size={30} color="#C4C4C4" />
              )}
              <span>{likes}</span>
            </button>
          </div>

          <div>
            <div className='addCartButton'>
              <button >
                <HiOutlineShoppingCart color='green' size={30} />
                <span>ADD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
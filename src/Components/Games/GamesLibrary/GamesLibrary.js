import { Card, CardBody, CardHeader } from 'reactstrap'
import GameCard from './GameCard/GameCard'

import './GamesLibrary.css'

let games = [
  {
    title: 'VR STEM: A Celestial Journey',
    categories: [
      'VR',
      'Adventure'
    ],
    version: '06.22.21',
    likes: 994,
    isLiked: true,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/celestial-journey.png'
  },
  {
    title: 'Gene-X Evolutions',
    categories: [
      'VR',
      'Action',
      'Puzzle',
    ],
    version: '06.15.21',
    likes: 976,
    isLiked: true,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/gene-x.png'
  },
  {
    title: 'VR Marine Biology',
    categories: [
      'VR',
      'Adventure',
    ],
    version: '11.05.21',
    likes: 921,
    isLiked: true,
    oldPrice: '40.00',
    newPrice: '30.00',
    imagePath: 'images/marine-biology.png'
  },
  {
    title: 'VR Music Hall',
    categories: [
      'VR',
      'Strategy',
    ],
    version: '12.02.21',
    likes: 897,
    isLiked: true,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/music-hall.png'
  },
  {
    title: 'VR Playground',
    categories: [
      'VR',
      'Action',
      'Sports',
    ],
    version: '12.17.21',
    likes: 894,
    isLiked: true,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/playground.png'
  },
  {
    title: 'VR Human Anatomy',
    categories: [
      'VR',
      'Action',
      'Puzzle',
    ],
    version: '06.20.21',
    likes: 834,
    isLiked: false,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/human-anatomy.png'
  },
  {
    title: 'Gardens',
    categories: [
      'VR',
      'Puzzle',
      'Strategy',
    ],
    version: '06.30.21',
    likes: 813,
    isLiked: false,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/gardens.png'
  },
  {
    title: 'VR Whiteboard',
    categories: [
      'VR',
      'Action',
      'Puzzle',
    ],
    version: '06.21.21',
    likes: 755,
    isLiked: false,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/whiteboard.png'
  },
  {
    title: 'Steamhaven Cogworks',
    categories: [
      'VR',
      'Role Playing',
      'Puzzle',
    ],
    version: '06.21.21',
    likes: 737,
    isLiked: false,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/steamhaven.png'
  },
  {
    title: 'Harmony Train',
    categories: [
      'VR',
      'Puzzle',
      'Strategy',
    ],
    version: '06.15.21',
    likes: 739,
    isLiked: false,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/harmony-train.png'
  },
  {
    title: 'Paper Weather',
    categories: [
      'VR',
      'Puzzle',
    ],
    version: '06.30.22',
    likes: 722,
    isLiked: false,
    oldPrice: '07.00',
    newPrice: '05.00',
    imagePath: 'images/paper-weather.png'
  },
]



export default function GamesLibrary() {
  return (
    <div className='libraryWrapper'>
      <Card>
        <CardHeader>
          GAME LIBRARY
        </CardHeader>

        <CardBody className='bodyWrapper'>
          <div className='titleWrapper'>
            <p>
              Our content supports schools, home education, and incrementing learning techniques
            </p>
            <p>
              Learn about <a href=''>Science</a>, <a href=''>Technology</a>, <a href=''>Engineering</a>, the <a href=''>Arts</a>, and <a href=''>Mathematics</a>
            </p>
            <p>
              Trusted by teachers, loved by students and families
            </p>

            <div className='inputWrapper'>
              <input type="text" placeholder='Search games' />
            </div>
          </div>

          <div className='gameCardsWrapper'>
            {games.map((game) => (
              <GameCard
                isLiked={game.isLiked}
                oldPrice={game.oldPrice}
                newPrice={game.newPrice}
                title={game.title}
                categories={game.categories}
                version={game.version}
                likes={game.likes}
                imagePath={game.imagePath}
              />
            ))}
          </div>

          <div className='moreGames'>
            <a href=''>MORE GAMES...</a>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
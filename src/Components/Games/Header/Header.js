import './Header.css'
import { Card, CardHeader, CardFooter } from 'reactstrap'

export default function Header() {
  return (
    <header>
      <Card>
        <CardHeader>
          .
        </CardHeader>
        <img src="images/Recurso21.png" alt='' />
      </Card>

      <div className='secondLayer'>
        <Card>
          <CardHeader>
            .
          </CardHeader>
          <img src="images/video1.png" alt='' />
          <CardFooter>
            .
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            .
          </CardHeader>
          <img src="images/video2.png" alt='' />
          <CardFooter>
            .
          </CardFooter>
        </Card>
      </div>
    </header>
  )
}
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React Carousel</h1>

      <Carousel showThumbs={false} infiniteLoop autoPlay showStatus={false}>
        <div>
          <img src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=900" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900" alt="Macao" />
          <p className="legend">Macao</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900" alt="Japan" />
          <p className="legend">Japan</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=900" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  )
}

export default App

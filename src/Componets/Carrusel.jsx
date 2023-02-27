import Carousel from 'react-bootstrap/Carousel';

import Img2 from '../assets/slider1.png'
import Img3 from '../assets/bannerGravita1.png'
import Img4 from '../assets/slider3.png'

import './Carrusel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 >  <nav className='text-black'>Ropa </nav></h3>
          <p>Diseños unicos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-black'>Ropa moderna</h3>
          <p>Exclusivos diseños</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color'>Nuestro espacio</h3>
          <p>
            Texto informativo
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
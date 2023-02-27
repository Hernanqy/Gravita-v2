import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ImgProd1 from '../assets/producto1.png';
import ImgProd2 from '../assets/producto2.png';
import ImgProd4 from '../assets/producto4.png';
import ImgProd5 from '../assets/producto5.png';
import ImgProd6 from '../assets/producto6.png';
import ImgProd7 from '../assets/producto7.png';
import ImgProd8 from '../assets/producto8.png';
import ImgProd9 from '../assets/producto9.png';
import ImgProd10 from '../assets/producto10.png';
import ImgProd11 from '../assets/producto11.png';
import ImgProd12 from '../assets/Gravita-Logo-cuadrado.jpg'

import './Card.css'

import React from 'react'

function Cards() {
  return (
    <div>
      <CardGroup className='m-5 gap-5'>
        <div className='row'>
            <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img className='rounded-5 'variant="top" src={ImgProd1} />
        <Card.Body className='d-flex justify-content-center'>
          <Card.Title ><button type="button" class="btn btn-light">Añadir al carro</button></Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
            <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img className='rounded-5 'variant="top" src={ImgProd1} />
        <Card.Body className='d-flex justify-content-center'>
          <Card.Title ><button type="button" class="btn btn-light">Añadir al carro</button></Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
            <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img className='rounded-5 'variant="top" src={ImgProd1} />
        <Card.Body className='d-flex justify-content-center'>
          <Card.Title ><button type="button" class="btn btn-light">Añadir al carro</button></Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
     </div>
        <div className='row'>
            <div className='col'>
      <Card className='rounded-5 border border-dark'>
        <Card.Img className='rounded-5'variant="top" src={ImgProd11} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
      <div className='col'>
      <Card className='rounded-5 border border-dark'>
        <Card.Img variant="top" className='rounded-5' src={ImgProd9} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      </div>
      <div className='col'>
      <Card className='rounded-5 border border-dark'>
        <Card.Img variant="top" className='rounded-5' src={ImgProd10} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
      
          </Card.Text>
        </Card.Body>
        
      </Card>
      </div></div>

<div><img src={ImgProd12} alt="" width="50%" />
<img src={ImgProd12} alt="" width="50%" /></div>

    </CardGroup>

    

    </div>
  )
}

export default Cards

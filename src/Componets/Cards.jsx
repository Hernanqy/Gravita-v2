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
        <Card.Text className='d-flex justify-content-center mt-1'>
          <span>Producto numero uno :5.000 ars</span>  
      
          </Card.Text>
        <Card.Body className='d-flex justify-content-center'>
          <Card.Title ><button type="button" class="btn btn-light border ">Añadir al carro</button></Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
            <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img className='rounded-5 'variant="top" src={ImgProd4} />
        <Card.Text className='d-flex justify-content-center mt-1'>
          <span>Producto numero uno :5.000 ars</span>  
      
          </Card.Text>
        <Card.Body className='d-flex justify-content-center'>
        
          
          <Card.Title ><button type="button" class="btn btn-light border">Añadir al carro</button></Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
            <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img className='rounded-5 'variant="top" src={ImgProd5} />
        <Card.Text className='d-flex justify-content-center mt-1'>
          <span>Producto numero uno :5.000 ars</span>  
      
          </Card.Text>
        <Card.Body className='d-flex justify-content-center'>
          <Card.Title ><button type="button" class="btn btn-light border">Añadir al carro</button></Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
     </div>
        <div className='row'>
            <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img className='rounded-5'variant="top" src={ImgProd11} />
        <Card.Text className='d-flex justify-content-center mt-1'>
          <span>Producto numero uno :5.000 ars</span>  
      
          </Card.Text>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
      
      </Card>
      </div>
      <div className='col'>
      <Card className='rounded-5 '>
        <Card.Img variant="top" className='rounded-5' src={ImgProd9} />
        <Card.Text className='d-flex justify-content-center mt-1'>
          <span>Producto numero uno :5.000 ars</span>  
      
          </Card.Text>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
        
      </Card>
      </div>
      <div className='col'>
      <Card className='rounded-5'>
        <Card.Img variant="top" className='rounded-5' src={ImgProd10} />
        <Card.Text className='d-flex justify-content-center mt-1'>
          <span>Producto numero uno :5.000 ars</span>  
      
          </Card.Text>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
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

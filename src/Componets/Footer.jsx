import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter  className='contenedorFooter text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://porfolio-hgq-2023.vercel.app/'>
          Desarrollador MiddleWare Olavarria 2023
        </a>
      </div>
    </MDBFooter>
  );
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import Img1 from '../assets/gravitalogo.jpg'
function BasicExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
  <div className="container-fluid ">
  <a className="navbar-brand" href="#">
      <img src={Img1} alt="" width="80" height="80"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
        <li className="nav-item  ">
          <a className="nav-link active " aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nuestra empresa</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Remeras</a></li>
            <li><a className="dropdown-item" href="#">Pantalones</a></li>
            
            <li><a className="dropdown-item" href="#">Polleras</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
      <HiOutlineShoppingCart size={30}/>
      </form>
    </div>
  </div>
</nav>
  );
}

export default BasicExample;
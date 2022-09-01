import React from 'react'
import { Link } from 'react-router-dom'
import Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/home.css'


const Home = () => {
  return (
    <Navbar bg="dark" variant="dark" id="navbar">
          <Link id="nav-item" to='/'><Navbar.Brand id ='nav-item'><img id='navPicture' src={ require('../img/white-lamb.png')}alt='' /></Navbar.Brand></Link>
      <Nav className="mr-auto pl-2" id="navbar">
        <Link id ='nav-item' className="nav-link" to="/"> Home </Link>
        <Link id ='nav-item'className="nav-link" to="/search"> Search Recipes </Link>
        <Link id ='nav-item'className="nav-link" to="/my-list"> My Recipes </Link>
      </Nav>
      </Navbar>
  );
}

export default Home
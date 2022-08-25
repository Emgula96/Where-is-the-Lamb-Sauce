import React from 'react'
import { Link } from 'react-router-dom'
import Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCow} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand><FontAwesomeIcon icon={faCow} /></Navbar.Brand>
      <Nav className="mr-auto pl-2">
        <Link className="nav-link" to="/"> Home </Link>
        <Link className="nav-link" to="/Search"> Search Recipes </Link>
        <Link className="nav-link" to="/GroceryList"> Grocery List </Link>
      </Nav>
      </Navbar>
  );
}

export default Home